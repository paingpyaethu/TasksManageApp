import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import notifee, {
  AndroidImportance,
  EventType,
  Notification,
} from '@notifee/react-native';
import {useAtomValue} from 'jotai';
import {isAuthenticatedAtom} from '../store';
import DashboardStackNavigator from './stack/DashboardStackNavigator';
import AuthStackNavigator from './stack/AuthStackNavigator';
import {Platform} from 'react-native';
import {
  AndroidMessageChannelId,
  handleForegroundNotiHandler,
  requestUserPermission,
} from '../utils/Notification';
import {navigationRef} from './navigationUtils';
import SplashScreen from '../screens/Splash/SplashScreen';

if (Platform.OS === 'android') {
  notifee.createChannel({
    id: AndroidMessageChannelId,
    name: 'Tasks message channel',
    sound: 'default',
    importance: AndroidImportance.HIGH,
  });
}

const ApplicationNavigator = () => {
  const isAuthenticated = useAtomValue(isAuthenticatedAtom);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    requestUserPermission();
    return notifee.onForegroundEvent(({type, detail}) => {
      switch (type) {
        case EventType.DISMISSED:
          break;
        case EventType.PRESS:
          handleForegroundNotiHandler(detail.notification as Notification);
          break;
      }
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsReady(true);
    }, 1500);
  }, []);
  if (!isReady) {
    return <SplashScreen />;
  }
  return (
    <NavigationContainer ref={navigationRef}>
      {isAuthenticated ? <DashboardStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
};

export default ApplicationNavigator;
