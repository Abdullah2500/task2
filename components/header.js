import React from 'react';
import {View, Image, Text, Pressable} from 'react-native';
import {calHeight, calWidth} from '../caldimens';

const Header = props => {
  const {title} = props;
  return (
    <View
      style={{
        flexDirection: 'row',
        height: calHeight(10),
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        alignSelf: 'center',
        paddingHorizontal: calWidth(7),
      }}>
      {!title ? (
        <Pressable onPress={() => props.navigation.goBack()}>
          <Image source={require('../assets/img/arrowleft.png')} />
        </Pressable>
      ) : (
        <Text
          style={{
            fontFamily: 'NunitoSans-Bold',
            fontSize: 26,
            color: '#373C46',
          }}>
          {title}
        </Text>
      )}
      <Image
        style={{width: 45, height: 45}}
        source={require('../assets/img/logo.png')}
      />
    </View>
  );
};
export default Header;
