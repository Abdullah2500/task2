import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {base_url} from '../../../enums';
import Header from '../../../components/header';
import ListCommunities from './listcommunities';

const CommunitiesMain = props => {
  const [commmunityList, setCommunityList] = useState([]);
  const [index, setIndex] = useState(1);

  var currentList = commmunityList.filter(item => {
    return item.category == 'Current';
  });
  console.log('CurrentList: ', currentList);
  var futureList = commmunityList.filter(item => {
    {
      return item.category == 'Future';
    }
  });
  var completedList = commmunityList.filter(item => {
    return item.category == 'Completed';
  });

  const getToken = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      console.log('getToken, communitiesMain: ', value);
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
      id: '1',
      name: '  All  ',
    },
    {
      id: '2',
      name: ' Current ',
    },
    {
      id: '3',
      name: ' Future ',
    },
    {
      id: '4',
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
          style={
            item.id == index
              ? {
                  color: '#85754E',
                  fontFamily: 'NunitoSans-Regular',
                  fontSize: 15,
                  paddingBottom: 5,
                  borderBottomColor: '#85754E',
                  borderBottomWidth: 2,
                }
              : {
                  color: 'black',
                  fontFamily: 'NunitoSans-Regular',
                  fontSize: 15,
                }
          }>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    getCommunityList();
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: '#E5E5E5'}}>
      <Header title="Hi, Charles!" navigation={props.navigation} />
      <View
        style={{
          backgroundColor: '#E5E5E5',
          width: '85%',
          alignSelf: 'center',
        }}>
        <Text
          style={{
            color: '#585C63',
            fontSize: 18,
            fontFamily: 'NunitoSans-Regular',
          }}>
          Let's find you dream home.
        </Text>
      </View>
      <View
        style={{
          width: '90%',
          alignSelf: 'center',
          marginTop: '5%',
        }}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={tabs}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
      {index == 1 ? (
        <ListCommunities commmunityList={commmunityList} />
      ) : index == 2 ? (
        <ListCommunities commmunityList={currentList} />
      ) : index == 3 ? (
        <ListCommunities commmunityList={futureList} />
      ) : index == 4 ? (
        <ListCommunities commmunityList={completedList} />
      ) : null}
    </View>
  );
};

export default CommunitiesMain;
