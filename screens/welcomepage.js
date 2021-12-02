import React from 'react';
import {View, Text, Image, TouchableOpacity, Pressable} from 'react-native';
import {calHeight, calWidth} from '../caldimens';

const WelcomePage = props => {
  return (
    <View style={{flex: 1}}>
      <Image
        resizeMode={'cover'}
        source={require('../assets/img/welcomepage.jpg')}
        style={{
          height: calHeight(45),
          width: '100%',
        }}
      />
      <View
        style={{
          alignItems: 'center',
          paddingHorizontal: calWidth(7),
          borderTopEndRadius: 30,
          borderTopStartRadius: 30,
          position: 'absolute',
          bottom: 0,
          width: '100%',
          backgroundColor: '#FFFFFF',
          height: calHeight(60),
        }}>
          <Image
            source={require('../assets/img/logo.png')}
            style={{
              marginTop: calHeight(3),
              height: 50,
              width: 50
            }}
          />
        <Text
          style={{
            color: '#373C46',
            fontSize: 24,
            textAlign: 'center',
            fontFamily: 'NunitoSans-Bold',
            marginTop: calHeight(5),
          }}>
          Crafting Distinctive Niche Communities.
        </Text>
        <Text
          style={{
            color: '#585C63',
            fontSize: 16,
            textAlign: 'center',
            fontFamily: 'NunitoSans-Regular',
            marginTop: calHeight(5),
            lineHeight: 30,
          }}>
          Available to you at the touch of a button. Let us take care of the
          hard work.
        </Text>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => props.navigation.push('Login')}
          style={{
            backgroundColor: '#85754E',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: calHeight(8),
            borderRadius: 12,
            marginTop: calHeight(5),
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 16,
              fontFamily: 'NunitoSans-Regular',
            }}>
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomePage;
