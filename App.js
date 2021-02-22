import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Base from './Base'
import Chat from './Chat'
// function HomeScreen() {
//   return (
//     <Base/>
//   );
// }

// function ChatScreen({ navigation }) {
//   return (
//     <Chat/>
//   );
// }



// function SettingsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button title="Go back" } />
//     </View>
//   );
// }

const Stack = createStackNavigator();


  
  export default function App() {
    return (
      <NavigationContainer independent={true}>
      <Stack.Navigator  screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="Home" component={Base} />
      <Stack.Screen name="Chat" component={Chat} /> 
    </Stack.Navigator>
    </NavigationContainer>

);
}
