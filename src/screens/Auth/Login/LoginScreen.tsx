import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Input from '../../../components/common/Input/Input';
import {Colors} from '../../../themes';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Button from '../../../components/common/Button/Button';
import {useAtomValue, useSetAtom} from 'jotai';
import {isAuthenticatedAtom, passwordAtom, userNameAtom} from '../../../store';
import {useNavigation} from '@react-navigation/native';
import {AuthStackNavigationType} from '../../../../types/Auth/AuthStackType';
import {createOneButtonAlert} from '../../../components/common/SystemAlert/SystemAlert';

const LoginScreen = () => {
  const navigation = useNavigation<AuthStackNavigationType>();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const atomUsername = useAtomValue(userNameAtom);
  const atomPassword = useAtomValue(passwordAtom);

  console.log(
    '🚀 ~ file: LoginScreen.tsx:26 ~ LoginScreen ~ atomUsername:',
    atomUsername,
  );
  console.log(
    '🚀 ~ file: LoginScreen.tsx:28 ~ LoginScreen ~ atomPassword:',
    atomPassword,
  );

  const setIsAuthenticated = useSetAtom(isAuthenticatedAtom);

  const handleLogin = () => {
    if (atomUsername !== '' || atomPassword !== '') {
      if (userName === atomUsername && password === atomPassword) {
        return createOneButtonAlert({
          title: 'Great!',
          message: 'Login Successful.',
          callback: () => {
            setIsAuthenticated(true);
          },
        });
      } else {
        return createOneButtonAlert({
          title: 'Warning!',
          message: 'Login Invalid.',
          callback: () => {},
        });
      }
    } else {
      return createOneButtonAlert({
        title: 'Warning!',
        message: 'Login Invalid.',
        callback: () => {
          setUserName('');
          setPassword('');
        },
      });
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../../../../assets/images/login.png')}
        resizeMode="cover"
        style={{width: wp(60), height: hp(30)}}
      />
      <Input
        placeholder="Username"
        value={userName}
        onChangeText={text => setUserName(text)}
        icon="user"
      />
      <Input
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
        icon="lock"
      />
      <Button label="Login" onPress={handleLogin} />
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.registerText}>
          Don't have an account? Register here
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  registerText: {
    fontSize: hp(2),
    letterSpacing: 1,
    marginTop: hp(2),
    marginBottom: hp(1),
    color: Colors.primary,
  },
});
