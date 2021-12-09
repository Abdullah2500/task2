import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Communities from '../screens/bottomTabs/communities/communitiesNav';
import Listings from '../screens/bottomTabs/listings/listings';
import News from '../screens/bottomTabs/news';
import Notifications from '../screens/bottomTabs/notifications';
import More from '../screens/bottomTabs/more';
import {Image, View, Text, StyleSheet} from 'react-native';
import {calHeight} from '../caldimens';

const Tab = createBottomTabNavigator();

const NavBottom = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: calHeight(12),
          borderTopEndRadius: 25,
          borderTopStartRadius: 25,
          position: 'absolute',
          bottom: 0,
        },
      }}>
      <Tab.Screen
        name="Communities"
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../assets/img/navicons/communities.png')}
                resizeMode="contain"
                style={{
                  tintColor: focused ? '#85754E' : '#A3A3A3',
                }}
              />
              <Text
                style={{
                  fontSize: 10,
                  fontFamily: 'NunitoSans-Regular',
                  color: focused ? '#373C46' : '#A3A3A3',
                }}>
                Communities
              </Text>
            </View>
          ),
        }}
        initialRouteName={Communities}
        component={Communities}
      />
      <Tab.Screen
        name="Listings"
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../assets/img/navicons/listings.png')}
                resizeMode="contain"
                style={{
                  tintColor: focused ? '#85754E' : '#A3A3A3',
                }}
              />
              <Text
                style={{
                  fontSize: 10,
                  fontFamily: 'NunitoSans-Regular',
                  color: focused ? '#373C46' : '#A3A3A3',
                }}>
                Listings
              </Text>
            </View>
          ),
        }}
        component={Listings}
      />
      <Tab.Screen
        name="News"
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../assets/img/navicons/news.png')}
                resizeMode="contain"
                style={{
                  tintColor: focused ? '#85754E' : '#A3A3A3',
                }}
              />
              <Text
                style={{
                  fontSize: 10,
                  fontFamily: 'NunitoSans-Regular',
                  color: focused ? '#373C46' : '#A3A3A3',
                }}>
                News
              </Text>
            </View>
          ),
        }}
        component={News}
      />
      <Tab.Screen
        name="Notifications"
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../assets/img/navicons/notifications.png')}
                resizeMode="contain"
                style={{
                  tintColor: focused ? '#85754E' : '#A3A3A3',
                }}
              />
              <Text
                style={{
                  fontSize: 10,
                  fontFamily: 'NunitoSans-Regular',
                  color: focused ? '#373C46' : '#A3A3A3',
                }}>
                Notifications
              </Text>
            </View>
          ),
        }}
        y
        component={Notifications}
      />
      <Tab.Screen
        name="More"
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../assets/img/navicons/more.png')}
                resizeMode="contain"
                style={{tintColor: focused ? '#85754E' : '#A3A3A3'}}
              />
              <Text
                style={{
                  fontSize: 10,
                  fontFamily: 'NunitoSans-Regular',
                  color: focused ? '#373C46' : '#A3A3A3',
                }}>
                More
              </Text>
            </View>
          ),
        }}
        component={More}
      />
    </Tab.Navigator>
  );
};

export default NavBottom;
