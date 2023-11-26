import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LOGIN_SCREEN} from '../routeNames';
import LoginScreen from '../../screens/Login/LoginScreen';

const Stack = createStackNavigator();

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={LOGIN_SCREEN} component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
