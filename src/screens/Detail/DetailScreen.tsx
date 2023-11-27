/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Colors} from '../../themes';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Entypo';
import BackIcon from 'react-native-vector-icons/FontAwesome';
import SafeAreaWrapper from '../../components/common/SafeAreaWrapper/SafeAreaWrapper';
import {DashboardStackParamList} from '../../../types/Dashboard/DashboardStackType';
import {RouteProp, useRoute} from '@react-navigation/native';

type DetailScreenRouteType = RouteProp<DashboardStackParamList, 'DetailScreen'>;

const DetailScreen = ({navigation}: any) => {
  const route = useRoute<DetailScreenRouteType>();
  const taskDetail = route.params.taskDetail;

  return (
    <SafeAreaWrapper>
      <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.8}>
        <BackIcon
          name={'arrow-circle-left'}
          size={hp(5)}
          color={Colors.white}
          style={{margin: wp(5)}}
        />
      </TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.card}>
          <View>
            <Text style={styles.reminderText}>Reminder</Text>
            <Icon
              name={'bell'}
              size={hp(7)}
              color={Colors.darkBlue}
              style={styles.icon}
            />
          </View>
          <Text style={styles.date}>{taskDetail?.date}</Text>
          <View style={{marginTop: hp(3)}}>
            <Text style={styles.titleText}>{taskDetail?.title}</Text>
            <Text style={styles.descText}>{taskDetail?.desc}</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Image
              source={require('../../../assets/images/task_detail.png')}
              resizeMode="cover"
              style={styles.image}
            />
          </View>
        </View>
      </View>
    </SafeAreaWrapper>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: hp(6),
    alignItems: 'center',
    backgroundColor: Colors.primary,
  },
  card: {
    width: wp(90),
    backgroundColor: Colors.secondary,
    padding: hp(2),
    borderRadius: hp(2),
  },
  reminderText: {
    fontSize: hp(3.5),
    fontWeight: 'bold',
    color: Colors.white,
    letterSpacing: 1.2,
  },
  icon: {
    position: 'absolute',
    top: -hp(5),
    right: -hp(5),
  },
  date: {
    backgroundColor: Colors.darkBlue,
    padding: hp(1),
    color: Colors.white,
    borderRadius: hp(4),
    textAlign: 'center',
    marginTop: hp(3),
  },
  titleText: {
    fontSize: hp(2.3),
    color: Colors.darkBlue,
    fontWeight: 'bold',
    letterSpacing: 1.2,
    marginBottom: hp(1),
  },
  descText: {
    fontSize: hp(2),
    color: Colors.darkBlue,
    letterSpacing: 1.2,
  },
  image: {
    width: wp(70),
    height: hp(40),
    marginBottom: -hp(10),
  },
});
