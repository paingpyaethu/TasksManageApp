import {Alert} from 'react-native';

interface OneButtonAlertProps {
  title: string;
  message: string;
  callback: () => void;
}
interface TwoButtonAlertProps {
  title: string;
  message: string;
  onPressCancel: () => void;
  onPressOk: () => void;
}

const createOneButtonAlert = ({
  title = 'Warning',
  message,
  callback,
}: OneButtonAlertProps) =>
  Alert.alert(title, message, [
    {
      text: 'OK',
      onPress: () => {
        if (callback) {
          callback();
        }
      },
    },
  ]);

const createTwoButtonAlert = ({
  title,
  message,
  onPressCancel,
  onPressOk,
}: TwoButtonAlertProps) =>
  Alert.alert(title, message, [
    {
      text: 'Cancel',
      onPress: () => onPressCancel(),
      style: 'cancel',
    },
    {text: 'OK', onPress: () => onPressOk()},
  ]);

export {createOneButtonAlert, createTwoButtonAlert};
