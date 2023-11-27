import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../../screens/Auth/Login/LoginScreen';
import {AuthStackParamList} from '../../../types/Auth/AuthStackType';
import RegisterScreen from '../../screens/Auth/Register/RegisterScreen';

const Stack = createStackNavigator<AuthStackParamList>();

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'LogIn'} component={LoginScreen} />
      <Stack.Screen name={'Register'} component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
