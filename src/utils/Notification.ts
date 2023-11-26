import notifee, {
  AuthorizationStatus,
  Notification,
} from '@notifee/react-native';
import {navigate} from '../navigators/navigationUtils';

export const AndroidMessageChannelId = 'TASKS-MANAGE-APP';

export const requestUserPermission = async () => {
  const settings = await notifee.requestPermission();

  if (settings.authorizationStatus >= AuthorizationStatus.AUTHORIZED) {
    console.log('Permission settings:', settings);
  } else {
    console.log('User declined permissions');
  }
};
export const handleForegroundNotiHandler = (notification: Notification) => {
  const {data} = notification;
  navigate('DetailScreen', {taskDetail: data?.details});
};
