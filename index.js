/**
 * @format
 */

import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import notifee from '@notifee/react-native';

notifee.onBackgroundEvent(async ({type, detail}) => {
  if (type === 1) {
    await notifee.cancelNotification(detail.notification.id);
  }
});
AppRegistry.registerComponent(appName, () => App);
