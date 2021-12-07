import React from 'react';
// import {createStackNavigator} from '@react-navigation/stack';
import {View, Text, StyleSheet} from 'react-native';
import Header from '../../../components/header';
// const Stack = createStackNavigator();
import {fonts, colors} from '../../../enums';

const Listings = props => {
  return (
    <View style={styles.mainContainer}>
      <Header title="Listings" navigation={props.navigation} />
      <View style={styles.container}>
        <Text style={styles.labelText}>Listings Page</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.background,
    flex: 1,
  },
  container: {
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelText: {
    fontSize: 16,
    color: colors.labelFontColor,
    fontFamily: fonts.regular,
  },
});

export default Listings;
