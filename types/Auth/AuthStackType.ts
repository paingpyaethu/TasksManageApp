import {StackNavigationProp} from '@react-navigation/stack';

export type AuthStackParamList = {
  LogIn: undefined;
  Register: undefined;
};

export type AuthStackNavigationType = StackNavigationProp<AuthStackParamList>;
