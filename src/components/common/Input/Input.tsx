import React from 'react';
import {TextInput, StyleSheet, View, TextInputProps} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../../../themes';

interface InputProps extends TextInputProps {
  placeholder: string;
  icon?: string;
}

const Input = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  icon,
}: InputProps) => {
  return (
    <View style={styles.inputContainer}>
      {icon && (
        <Icon
          name={icon}
          size={hp(3)}
          color={Colors.secondary}
          style={styles.icon}
        />
      )}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    height: hp(7),
    borderColor: Colors.blue200,
    borderWidth: wp(0.2),
    borderRadius: hp(2),
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    fontSize: hp(2),
    letterSpacing: 1.1,
  },
  icon: {
    marginRight: wp(3),
  },
});

export default Input;
