import React from 'react';
import {View, Text} from 'react-native';
import Header from '../../../../../components/header';

const Post2 = props => {
  // console.log('Navigation in Post 1 Component', props.navigation);
  return (
    <View>
      <Header navigation={props.navigation} />
      <View
        style={{
          paddingVertical: 200,
          alignItems: 'center',
          backgroundColor: '#E5E5E5',
          height: '100%',
        }}>
        <Text>This is the Second Post</Text>
      </View>
    </View>
  );
};

export default Post2;
