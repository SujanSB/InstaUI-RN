import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './components/Home'
import Search from './components/SearchScreen'
import PostAdd from './components/PostAddScreen'
import Notifi from './components/NotifiScreen'
import Profile from './components/ProfileScreen'

import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

function HomeScreen() {
  return (
      <Home/>
  );
}

function SearchScreen() {
  return (
      <Search/>
  );
}
function PostAddScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <PostAdd/>
    </View>
  );
}

function NotifiScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Notifi/>
    </View>
  );
}
function ProfileScreen() {
  return (
      <Profile/>
  );
}

const Tab = createBottomTabNavigator();

export default function Base() {
  return (
    // <NavigationContainer >
            <Tab.Navigator
            style={{}}

        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-home'
                : 'md-home';
            } else if (route.name === 'Search') {
              iconName = focused ? 'ios-search' : 'md-search';
            } else if (route.name === 'Add') {
              iconName = focused ? 'ios-add-circle' : 'ios-add-circle-outline';
            } else if (route.name === 'Notification') {
              iconName = focused ? 'ios-notifications' : 'ios-notifications-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'ios-contact' : 'ios-person';
            }

            // You can return any component that you like here!
            // <AntDesign name="pluscircle" size={24} color="black" />
            return (
            <>
            <Ionicons name={iconName} size={size} color={color} />
            {/* <AntDesign name={iconName} size={size} color={color} />; */}
            </>)
          },
        })}
        tabBarOptions={{
          activeTintColor: 'white',
          inactiveTintColor: 'gray',
          style:{
            backgroundColor:"black"
          }
        }
      }
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Add" component={PostAddScreen} />
        <Tab.Screen name="Notification" component={NotifiScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    // </NavigationContainer>
  );
}