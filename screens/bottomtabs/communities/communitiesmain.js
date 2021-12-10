import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {base_url} from '../../../enums';
import Header from '../../../components/Header';
import ModalComponent from '../../../components/Modal';
import ListCommunities from './ListCommunities';
import {fonts, colors} from '../../../enums';

const CommunitiesMain = props => {
  const [communityList, setCommunityList] = useState([]);
  const [refreshing, setRefreshing] = useState(true);
  const [index, setIndex] = useState(1);

  const getCommunityList = async () => {
    try {
      let token = await AsyncStorage.getItem('token');
      let config = {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      };
      const res = await axios.get(base_url + '/community-list', config);
      setCommunityList(res.data.data);
      setRefreshing(false);
    } catch (error) {
      console.log(error);
    }
  };

  const tabs = [
    {
      id: 1,
      name: '  All  ',
    },
    {
      id: 2,
      name: ' Current ',
    },
    {
      id: 3,
      name: ' Future ',
    },
    {
      id: 4,
      name: 'Completed',
    },
  ];
  // renderItem for tabs
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={{
          paddingHorizontal: 10,
        }}
        onPress={() => setIndex(item.id)}>
        <Text
          style={item.id == index ? styles.selectedTab : styles.unselectedTab}>
          {item.name}
        </Text>
      </TouchableOpacity>
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

  useEffect(() => {
    getCommunityList();
  }, []);

  return (
    <View style={styles.mainContainer}>
      <Header title="Hi, Charles!" navigation={props.navigation} />
      <View style={styles.upperSection}>
        <Text style={styles.upperSectionLabel}>Let's find you dream home.</Text>
      </View>
      {/* FlatList for Tabs */}
      <View style={styles.tabContainer}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={tabs}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
      {refreshing && <ModalComponent toggleLoading={setRefreshing} />}
      <ListCommunities
        communityList={filterFunction()}
        navigation={props.navigation}
        refreshing={refreshing}
        onRefresh={getCommunityList}
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
    width: '85%',
    alignSelf: 'center',
  },
  upperSectionLabel: {
    color: colors.labelFontColor,
    fontSize: 18,
    fontFamily: fonts.regular,
  },
  tabContainer: {
    width: '90%',
    alignSelf: 'center',
    marginTop: '5%',
  },
  selectedTab: {
    color: colors.primaryColor,
    fontFamily: fonts.regular,
    fontSize: 15,
    paddingBottom: 5,
    borderBottomColor: colors.primaryColor,
    borderBottomWidth: 2,
  },
  unselectedTab: {
    color: 'black',
    fontFamily: fonts.regular,
    fontSize: 15,
  },
});

export default CommunitiesMain;
