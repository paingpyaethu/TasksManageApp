import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Colors} from '../../../themes';

interface ButtonProps extends TouchableOpacityProps {
  label: string;
}

const Button = ({label, ...rest}: ButtonProps) => {
  return (
    <TouchableOpacity activeOpacity={0.9} style={styles.button} {...rest}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: wp(80),
    height: hp(7),
    backgroundColor: Colors.secondary,
    borderColor: Colors.blue200,
    borderWidth: wp(0.2),
    borderRadius: hp(2),
    marginVertical: hp(1.5),
  },
  buttonText: {
    fontSize: hp(2.2),
    letterSpacing: 1.2,
    color: Colors.white,
    textAlign: 'center',
  },
});

export default Button;
