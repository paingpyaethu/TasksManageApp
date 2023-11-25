import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
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
    backgroundColor: Colors.secondary,
    paddingHorizontal: hp(5),
    paddingVertical: hp(1.2),
    borderRadius: hp(1),
    marginTop: hp(1.2),
  },
  buttonText: {
    fontSize: hp(2.2),
    letterSpacing: 1.2,
    color: Colors.white,
    textAlign: 'center',
  },
});

export default Button;
