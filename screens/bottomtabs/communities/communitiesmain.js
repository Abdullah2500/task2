import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';

import All from './tabscommunities/all/all';
import Current from './tabscommunities/current';
import Future from './tabscommunities/future';
import Completed from './tabscommunities/completed';
import Header from '../../../components/header';

const CommunitiesMain = props => {
  const [index, setIndex] = useState(1);
  console.log('Index: ', index);
  // console.log('Navigation in CommunitiesMain', props.navigation);
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
        <All navigation={props.navigation} />
      ) : index == 2 ? (
        <Current />
      ) : index == 3 ? (
        <Future />
      ) : index == 4 ? (
        <Completed />
      ) : null}
    </View>
  );
};

export default CommunitiesMain;
