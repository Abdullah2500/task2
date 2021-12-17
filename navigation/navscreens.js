import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomePage from '../screens/WelcomePage';
import Login from '../screens/Login';
import HomePage from '../screens/HomePage';
import Register from '../screens/Register';

const Stack = createStackNavigator();

const NavScreens = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="WelcomePage"
          initialRouteName="WelcomePage"
          options={{headerShown: false}}
          component={WelcomePage}
        />
        <Stack.Screen
          name="Register"
          options={{headerShown: false}}
          component={Register}
        />
        <Stack.Screen
          name="Login"
          options={{headerShown: false}}
          component={Login}
        />
        <Stack.Screen
          name="HomePage"
          options={{headerShown: false}}
          component={HomePage} // Bottom Navigation here
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavScreens;
