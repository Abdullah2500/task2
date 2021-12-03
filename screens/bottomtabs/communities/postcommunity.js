import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {calHeight} from '../../../caldimens';

const PostCommunity = props => {
  const {name, address, coverImage} = props.item;
  return (
    <View
      style={{
        marginTop: calHeight(3),
        width: '100%',
        backgroundColor: '#FFFFFF',
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
      }}>
      <TouchableOpacity activeOpacity={0.9}>
        <Image
          style={{
            width: '100%',
            resizeMode: 'cover',
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
          }}
          source={{uri: coverImage}}
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
            {name}
          </Text>
          <Text
            style={{
              paddingVertical: '4%',
              fontFamily: 'NunitoSans-Regular',
              fontSize: 16,
              color: '#585C63CC',
            }}>
            {address}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PostCommunity;
