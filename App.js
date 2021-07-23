import React from 'react';
import Welcome from './src/pages/Welcome';
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import Login from './src/pages/Login';
export default function App() {
  const AppStack = createStackNavigator()
  return (
    <NavigationContainer>
      <AppStack.Navigator headerMode='none'>
        <AppStack.Screen name='Welcome' component={Welcome} />
        <AppStack.Screen name='Login' component={Login} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}