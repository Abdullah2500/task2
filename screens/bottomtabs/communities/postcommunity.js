import React from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {calHeight, calWidth} from '../../../caldimens';
import {fonts, colors} from '../../../enums';

const PostCommunity = props => {
  const {
    name,
    address,
    coverImage,
    about,
    short_description,
    long_description,
  } = props.item;
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() =>
          props.navigation.push('SinglePost', {
            name: name,
            address: address,
            about: about,
            short_description: short_description,
            long_description: long_description,
          })
        }>
        <Image
          style={styles.img}
          source={require('../../../assets/img/community1.png')}
        />
        <View style={styles.textBlock}>
          <Text style={styles.headText}>{name}</Text>
          <Text style={styles.labelText}>{address}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: calHeight(2),
    marginBottom: calHeight(3),
    width: calWidth(85),
    backgroundColor: colors.white,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
  },
  img: {
    width: '100%',
    resizeMode: 'cover',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  textBlock: {
    marginTop: '4%',
    paddingHorizontal: '8%',
  },
  headText: {
    fontSize: 24,
    fontFamily: fonts.bold,
    color: colors.mainFontColor,
  },
  labelText: {
    paddingVertical: '4%',
    fontFamily: fonts.regular,
    fontSize: 16,
    color: colors.placeholderColor,
  },
});

export default PostCommunity;
