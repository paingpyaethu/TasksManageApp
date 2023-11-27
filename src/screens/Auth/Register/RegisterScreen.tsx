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
import SafeAreaWrapper from '../../../components/common/SafeAreaWrapper/SafeAreaWrapper';
import {useAtom, useSetAtom} from 'jotai';
import {
  isAlreadyRegisteredAtom,
  passwordAtom,
  userNameAtom,
} from '../../../store';
import {createOneButtonAlert} from '../../../components/common/SystemAlert/SystemAlert';
import {useNavigation} from '@react-navigation/native';
import {AuthStackNavigationType} from '../../../../types/Auth/AuthStackType';

const RegisterScreen = () => {
  const navigation = useNavigation<AuthStackNavigationType>();

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const [isAlreadyRegistered, setIsAlreadyRegistered] = useAtom(
    isAlreadyRegisteredAtom,
  );
  const setAtomUsername = useSetAtom(userNameAtom);
  const setAtomPassword = useSetAtom(passwordAtom);

  const handleRegister = () => {
    if (userName === '' || password === '') {
      return createOneButtonAlert({
        title: 'Warning!',
        message: 'Invalid Registration.',
        callback: () => {
          setUserName('');
          setPassword('');
        },
      });
    } else if (isAlreadyRegistered) {
      return createOneButtonAlert({
        title: 'Opps!',
        message: 'Something is wrong. Please try again.',
        callback: () => {
          setUserName('');
          setPassword('');
        },
      });
    } else {
      return createOneButtonAlert({
        title: 'Great!',
        message: 'Successfully registered. Please login to your account.',
        callback: () => {
          setIsAlreadyRegistered(true);
          setUserName('');
          setPassword('');
          setAtomUsername(userName);
          setAtomPassword(password);
          navigation.navigate('LogIn');
        },
      });
    }
  };

  return (
    <SafeAreaWrapper>
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          source={require('../../../../assets/images/register.png')}
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
        <Button label="Register" onPress={handleRegister} />
        <TouchableOpacity onPress={() => navigation.navigate('LogIn')}>
          <Text style={styles.loginText}>
            Already have an account? Please Login
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaWrapper>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  loginText: {
    fontSize: hp(2),
    letterSpacing: 1,
    marginTop: hp(2),
    marginBottom: hp(1),
    color: Colors.primary,
  },
});
