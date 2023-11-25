import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from '../screens/Splash/SplashScreen';
import {useAtomValue} from 'jotai';
import {isAuthenticatedAtom} from '../store';
import DashboardStackNavigator from './stack/DashboardStackNavigator';

const ApplicationNavigator = () => {
  const isAuthenticated = useAtomValue(isAuthenticatedAtom);

  return (
    <NavigationContainer>
      {isAuthenticated ? <DashboardStackNavigator /> : <SplashScreen />}
    </NavigationContainer>
  );
};

export default ApplicationNavigator;
