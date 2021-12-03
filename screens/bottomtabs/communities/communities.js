import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CommunitiesMain from './communitiesmain';

const Stack = createStackNavigator();

const Communities = props => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CommunitiesMain"
        options={{headerShown: false}}
        component={CommunitiesMain}
      />
    </Stack.Navigator>
  );
};

export default Communities;
