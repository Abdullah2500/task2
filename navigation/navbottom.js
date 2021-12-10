import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CommunitiesNav from '../screens/bottomTabs/communities/CommunitiesNav';
import Listings from '../screens/bottomTabs/listings/Listings';
import News from '../screens/bottomTabs/News';
import Notifications from '../screens/bottomTabs/Notifications';
import More from '../screens/bottomTabs/More';
import {Image, View, Text, StyleSheet} from 'react-native';
import {calHeight} from '../calDimens';

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
        name="CommunitiesNav"
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
        initialRouteName={CommunitiesNav}
        component={CommunitiesNav}
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
