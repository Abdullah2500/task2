import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {base_url} from '../../../enums';
import Header from '../../../components/header';
import ListCommunities from './listcommunities';
import {fonts, colors} from '../../../enums';

const CommunitiesMain = props => {
  const [communityList, setCommunityList] = useState([]);
  const [index, setIndex] = useState(1);

  const getToken = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      if (value !== null) {
        return value;
      } else {
        console.log('Inner value of async token is null');
      }
    } catch (e) {
      console.log('Error: ', e);
    }
  };

  const getCommunityList = async () => {
    try {
      let tokenState = await getToken();
      let config = {
        headers: {
          Authorization: 'Bearer ' + tokenState,
        },
      };
      await axios
        .get(base_url + '/community-list', config)
        .then(res => {
          setCommunityList(res.data.data);
        })
        .catch(error => console.log('Error: ', error));
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

  const switchFunc = () => {
    switch (index) {
      case 1:
        console.log('first tab');
        return (
          <ListCommunities
            communityList={communityList}
            navigation={props.navigation}
          />
        );
      case 2:
        console.log('second tab');
        var currentList = communityList.filter(item => {
          return item.category == 'Current';
        });
        return (
          <ListCommunities
            communityList={currentList}
            navigation={props.navigation}
          />
        );
      case 3:
        console.log('third tab');
        var futureList = communityList.filter(item => {
          {
            return item.category == 'Future';
          }
        });
        return (
          <ListCommunities
            communityList={futureList}
            navigation={props.navigation}
          />
        );
      case 4:
        console.log('fourth tab');
        var completedList = communityList.filter(item => {
          return item.category == 'Completed';
        });
        return (
          <ListCommunities
            communityList={completedList}
            navigation={props.navigation}
          />
        );
    }
  };

  // const switchFunc = () => {
  //   let data;
  //   switch (index) {
  //     case 1: {
  //       data = communityList;
  //       console.log('All');
  //       return data;
  //     }
  //     case 2: {
  //       data = communityList.filter(item => {
  //         return item.category == 'Current';
  //       });
  //       console.log('Current');
  //       return data;
  //     }
  //     case 3: {
  //       data = communityList.filter(item => {
  //         return item.category == 'Future';
  //       });
  //       console.log('Future');
  //       return data;
  //     }
  //     case 4: {
  //       data = communityList.filter(item => {
  //         return item.category == 'Completed';
  //       });
  //       console.log('Completed');
  //       return data;
  //     }
  //   }
  //   return (
  //     <ListCommunities communityList={data} navigation={props.navigation} />
  //   );
  // };

  useEffect(() => {
    getCommunityList();
  }, []);

  return (
    <View style={styles.mainContainer}>
      <Header title="Hi, Charles!" navigation={props.navigation} />
      <View style={styles.upperSection}>
        <Text style={styles.upperSectionLabel}>Let's find you dream home.</Text>
      </View>
      <View style={styles.tabContainer}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={tabs}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
      {switchFunc()}
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
