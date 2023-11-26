import React, {useEffect} from 'react';
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
  return (
    <NavigationContainer ref={navigationRef}>
      {!isAuthenticated ? <DashboardStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
};

export default ApplicationNavigator;
