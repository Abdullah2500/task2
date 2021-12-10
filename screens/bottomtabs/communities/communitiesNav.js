import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CommunitiesMain from './CommunitiesMain';
import SinglePost from './SinglePost';

const Stack = createStackNavigator();

const CommunitiesNav = props => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        initialRoute={CommunitiesMain}
        name="CommunitiesMain"
        options={{headerShown: false}}
        component={CommunitiesMain}
      />
      <Stack.Screen
        name="SinglePost"
        options={{headerShown: false}}
        component={SinglePost}
      />
    </Stack.Navigator>
  );
};

export default CommunitiesNav;
