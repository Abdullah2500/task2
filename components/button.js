import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {calHeight} from '../caldimens';
import {fonts, colors} from '../enums';

const Button = props => {
  return (
    <TouchableOpacity
      activeOpacity={props.activeOpacity}
      onPress={props.btnPressed}
      style={styles.btnContainer}>
      <Text style={styles.btnText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: colors.primaryColor,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: calHeight(8),
    borderRadius: 12,
    marginTop: calHeight(5),
  },
  btnText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: fonts.regular,
  },
});

export default Button;
