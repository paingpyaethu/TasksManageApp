import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../../themes';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.primary} />
      <Text>SplashScreen</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: Colors.primary,
  },
});
