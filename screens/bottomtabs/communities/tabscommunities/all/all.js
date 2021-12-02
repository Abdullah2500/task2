import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import Post from './post';
import { calHeight, calWidth } from '../../../../../caldimens';

const All = props => {
  const list = [
    {
      id: '1',
      img: require('../../../../../assets/img/homescreenimg1.png'),
      title: 'The Enclave on Nashville, Kleinburg',
      label: 'Kleinburg, ON',
      page: 'Post1',
    },
    {
      id: '2',
      img: require('../../../../../assets/img/homescreenimg2.png'),
      title: 'Longhill Estates',
      label: 'Aloha, Hawaii',
      page: 'Post2',
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={list}
        renderItem={({item}) => (
          <Post item={item} navigation={props.navigation} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: calWidth(90),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: calHeight(12),
  },
});

export default All;
