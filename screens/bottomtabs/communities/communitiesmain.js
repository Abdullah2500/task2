import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, Pressable, StyleSheet} from 'react-native';
import Header from '../../../components/Header';
import ModalComponent from '../../../components/Modal';
import ListCommunities from './ListCommunities';
import {fonts, colors} from '../../../enums';
import {getCommunitiesApi} from '../../../services/services';
import {
  closeLoading,
  setCommunityDetails,
} from '../../../redux/actions/actions';
import {useSelector, useDispatch} from 'react-redux';
import {calHeight, calWidth} from '../../../calDimens';

const CommunitiesMain = props => {
  const [index, setIndex] = useState(1);
  const [refreshing, setRefreshing] = useState(false);

  const dispatch = useDispatch();
  const visible = useSelector(state => state.loadingReducer);
  const communityList = useSelector(state => state.communityReducer.list);
  const username = useSelector(state => state.userReducer.details.username);

  const getCommunityList = async () => {
    try {
      const res = await getCommunitiesApi();
      dispatch(setCommunityDetails(res.data));
      dispatch(closeLoading());
    } catch (error) {
      console.log(error);
    }
  };

  const tabs = [
    {
      id: 1,
      name: ' All ',
    },
    {
      id: 2,
      name: 'Current',
    },
    {
      id: 3,
      name: 'Future',
    },
    {
      id: 4,
      name: 'Completed',
    },
  ];
  // renderItem for tabs
  const renderItem = ({item}) => {
    return (
      <Pressable
        style={{paddingHorizontal: 10}}
        onPress={() => setIndex(item.id)}>
        <Text
          style={item.id == index ? styles.selectedTab : styles.unselectedTab}>
          {item.name}
        </Text>
      </Pressable>
    );
  };

  const filterFunction = () => {
    switch (index) {
      case 1:
        return communityList;
      case 2:
        let currentList = communityList.filter(item => {
          return item.category === 'Current';
        });
        return currentList;
      case 3:
        let futureList = communityList.filter(item => {
          return item.category === 'Future';
        });
        return futureList;
      case 4:
        let completedList = communityList.filter(item => {
          return item.category === 'Completed';
        });
        return completedList;
    }
  };

  const refreshed = async () => {
    setRefreshing(true);
    await getCommunityList();
    setRefreshing(false);
  };

  useEffect(() => {
    getCommunityList();
  }, []);

  return (
    <View style={styles.mainContainer}>
      <Header title={`Hi, ${username}!`} navigation={props.navigation} />
      <View style={styles.upperSection}>
        <Text style={styles.upperSectionLabel}>Let's find you dream home.</Text>
      </View>
      <View style={styles.tabContainer}>
        {/* FlatList for Tabs */}
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={tabs}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
      {visible && <ModalComponent />}
      <ListCommunities
        communityList={filterFunction()}
        navigation={props.navigation}
        refreshing={refreshing}
        onRefresh={refreshed}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.background,
  },
  upperSection: {
    alignItems: 'flex-start',
    paddingHorizontal: calWidth(7),
  },
  upperSectionLabel: {
    color: colors.labelFontColor,
    fontSize: 18,
    fontFamily: fonts.regular,
    marginBottom: 8,
  },
  tabContainer: {
    marginHorizontal: calWidth(5),
    zIndex: 1,
  },
  selectedTab: {
    color: colors.primaryColor,
    fontFamily: fonts.regular,
    fontSize: 15,
    paddingBottom: 5,
    borderBottomColor: colors.primaryColor,
    borderBottomWidth: 3,
  },
  unselectedTab: {
    color: 'black',
    fontFamily: fonts.regular,
    fontSize: 15,
  },
});

export default CommunitiesMain;
