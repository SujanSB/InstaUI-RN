import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PhotoTag from './PhotoTag'
import Photo from './Photo'
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
function Aafno() {
  return (
    <View>
      <Photo/>
    </View>
  );
}

function AruleTag() {
  return (
    <View >
      <PhotoTag/>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function Photoshere() {
  return (
    // <NavigationContainer>
      <Tab.Navigator
      
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Aafno') {
            iconName = focused
              ? 'grid'
              : 'grid';
          } else if (route.name === 'Aruko') {
            iconName = focused ? 'tooltip-account' : 'tooltip-account';
          } 
          // You can return any component that you like here!
          // <AntDesign name="pluscircle" size={24} color="black" />
          return (
          <>
          
          <MaterialCommunityIcons name={iconName} size={26} color={color} />
          {/* <AntDesign name={iconName} size={size} color={color} />; */}
          </>)
        },
      })}
      tabBarOptions={{
        showLabel:false,
        showIcon:true,
        activeTintColor: 'white',
        inactiveTintColor: 'gray',
        style:{
          backgroundColor:"black",
          color:"teal"
        }
      }}
      
      
      
      >
        <Tab.Screen name="Aafno" component={Aafno} />
        <Tab.Screen name="Aruko" component={AruleTag} />
      </Tab.Navigator>
    // </NavigationContainer>
  );
}
