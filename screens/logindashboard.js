import React from 'react';
import {View, Text} from 'react-native';
import {calHeight, calWidth} from '../caldimens';
import Header from '../components/header';

const LoginDashboard = props => {
  const {msg} = props.route.params;
  return (
    <View>
      <Header navigation={props.navigation} />
      <View
        style={{
          height: calHeight(75),
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: calWidth(7),
        }}>
        <Text style={{
            color: '#585C63',
            textAlign: 'center',
            fontSize: 18,
            fontFamily: 'NunitoSans-Regular',
            lineHeight: 35}}>{msg}</Text>
      </View>
    </View>
  );
};
export default LoginDashboard;
