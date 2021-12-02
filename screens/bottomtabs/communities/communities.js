import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CommunitiesMain from './communitiesmain';
import Post1 from './tabscommunities/all/post1';
import Post2 from './tabscommunities/all/post2';

const Stack = createStackNavigator();

const Communities = props => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CommunitiesMain"
        options={{headerShown: false}}
        component={CommunitiesMain}
      />
      <Stack.Screen
        name="Post1"
        options={{headerShown: false}}
        component={Post1}
      />
      <Stack.Screen
        name="Post2"
        options={{headerShown: false}}
        component={Post2}
      />
    </Stack.Navigator>
  );
};

export default Communities;
