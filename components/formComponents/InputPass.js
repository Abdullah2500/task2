import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  Pressable,
  StyleSheet,
} from 'react-native';
import {calWidth} from '../../calDimens';
import {colors, fonts} from '../../enums';

const InputPassComponent = props => {
  const {textLabel, imgSource, placeholder, secureTextEntry, passVisible} =
    props;
  return (
    <View style={{width: '100%', alignItems: 'center'}}>
      <Text style={styles.inputLabel}>{textLabel}</Text>
      <View style={styles.inputContainer}>
        <Image style={styles.inputIcon} source={imgSource} />
        <View>
          <TextInput
            onChangeText={text => props.onChangeText(text)}
            style={styles.inputInnerContainer}
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
          />
        </View>
        <Pressable onPress={() => props.onPress()}>
          {passVisible ? (
            <Image source={require('../../assets/img/eye-crossed.png')} />
          ) : (
            <Image source={require('../../assets/img/eye.png')} />
          )}
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '95%',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: colors.borderColor,
    margin: '5%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputInnerContainer: {
    width: calWidth(54),
    fontFamily: fonts.regular,
    fontSize: 16,
    color: colors.placeholderColor,
  },
  inputIcon: {
    marginHorizontal: calWidth(5),
    alignSelf: 'center',
  },
  inputLabel: {
    color: colors.primaryColor,
    fontFamily: fonts.regular,
    fontSize: 16,
    alignSelf: 'flex-start',
    paddingLeft: 10,
  },
});

export default InputPassComponent;
