import React from 'react';
import {View, Text} from 'react-native';
import Header from '../../components/header';

const News = props => {
  return (
    <View style={{backgroundColor: '#E5E5E5'}}>
      <Header title="News" navigation={props.navigation} />
      <View
        style={{
          paddingVertical: 200,
          alignItems: 'center',
          height: '100%',
        }}>
        <Text>News Page</Text>
      </View>
    </View>
  );
};

export default News;
