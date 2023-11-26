import {Alert} from 'react-native';

interface TwoButtonAlertProps {
  title: string;
  message: string;
  onPressCancel: () => void;
  onPressOk: () => void;
}

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

export {createTwoButtonAlert};
