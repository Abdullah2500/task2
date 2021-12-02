import React from 'react';
// import {createStackNavigator} from '@react-navigation/stack';
import {View, Text} from 'react-native';
import Header from '../../../components/header';
// const Stack = createStackNavigator();

const Listings = props => {
  // return (
  //   <Stack.Navigator>
  //     <Stack.Screen
  //       name="ComA"
  //       options={{headerShown: false}}
  //       component={ComA}
  //     />
  //     <Stack.Screen
  //       name="ComB"
  //       options={{headerShown: false}}
  //       component={ComB}
  //     />
  //   </Stack.Navigator>
  // );
  return (
    <View style={{backgroundColor: '#E5E5E5'}}>
      <Header title="Listings" navigation={props.navigation} />
      <View
        style={{
          paddingVertical: 200,
          alignItems: 'center',
          height: '100%',
        }}>
        <Text>News Page</Text>
      </View>
    </View>
  );
};

export default Listings;
