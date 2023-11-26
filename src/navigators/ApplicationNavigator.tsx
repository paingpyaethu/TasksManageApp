import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useAtomValue} from 'jotai';
import {isAuthenticatedAtom} from '../store';
import DashboardStackNavigator from './stack/DashboardStackNavigator';
import AuthStackNavigator from './stack/AuthStackNavigator';

const ApplicationNavigator = () => {
  const isAuthenticated = useAtomValue(isAuthenticatedAtom);
  return (
    <NavigationContainer>
      {!isAuthenticated ? <DashboardStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
};

export default ApplicationNavigator;
