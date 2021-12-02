import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import { calHeight, calWidth } from '../../../../../caldimens';

const Post = props => {
  const {img, title, label, page} = props.item;
  console.log(page);
  return (
    <View
      style={{
        marginTop: calHeight(3),
        width: '100%',
        backgroundColor: '#FFFFFF',
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
      }}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => props.navigation.push(page)}>
        <Image
          style={{
            width: '100%',
            resizeMode: 'cover',
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
          }}
          source={img}
        />
        <View
          style={{
            marginTop: '4%',
            paddingHorizontal: '8%',
          }}>
          <Text
            style={{
              fontSize: 24,
              fontFamily: 'NunitoSans-Bold',
              color: '#373C46',
            }}>
            {title}
          </Text>
          <Text
            style={{
              paddingVertical: '4%',
              fontFamily: 'NunitoSans-Regular',
              fontSize: 16,
              color: '#585C63CC',
            }}>
            {label}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Post;
