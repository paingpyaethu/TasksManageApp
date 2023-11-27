import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Colors} from '../../../themes';

const EmptyTask: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.emptyText}>Empty Task</Text>
    </View>
  );
};

export default EmptyTask;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: hp(60),
  },
  emptyText: {
    fontSize: hp(2.5),
    color: Colors.white,
    fontWeight: 'bold',
    letterSpacing: 1.2,
  },
});
