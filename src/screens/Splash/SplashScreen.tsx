import {Image, StatusBar, StyleSheet, View} from 'react-native';
import React from 'react';
import {Colors} from '../../themes';
import SafeAreaWrapper from '../../components/common/SafeAreaWrapper/SafeAreaWrapper';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const SplashScreen = () => {
  return (
    <SafeAreaWrapper>
      <StatusBar backgroundColor={Colors.darkBlue} />
      <View style={styles.container}>
        <Image
          source={require('../../../assets/images/app_logo.png')}
          resizeMode="cover"
          style={styles.image}
        />
      </View>
    </SafeAreaWrapper>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.darkBlue,
  },
  image: {
    width: wp(60),
    height: hp(30),
  },
});
