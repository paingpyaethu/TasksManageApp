/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import SafeAreaWrapper from '../../components/common/SafeAreaWrapper/SafeAreaWrapper';
import {Colors} from '../../themes';
import styles from './Style';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import TaskList from '../../components/TaskList/TaskList';
import {createTwoButtonAlert} from '../../components/common/SystemAlert/SystemAlert';
import {useSetAtom} from 'jotai';
import {isAuthenticatedAtom} from '../../store';
import {useNavigation} from '@react-navigation/native';
import {DashboardScreenNavigationType} from '../../../types/Dashboard/DashboardStackType';

const DashboardScreen = () => {
  const navigation = useNavigation<DashboardScreenNavigationType>();

  const setIsAuthenticated = useSetAtom(isAuthenticatedAtom);

  const handleLogout = () => {
    return createTwoButtonAlert({
      title: 'Warning',
      message: 'Are you sure you want to log out?',
      onPressCancel: () => {},
      onPressOk: () => {
        setIsAuthenticated(false);
      },
    });
  };
  return (
    <SafeAreaWrapper>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.primary} />
      <View style={styles.container}>
        <View style={styles.rowCenter}>
          <TouchableOpacity
            onPress={() => navigation.navigate('AddTaskScreen', {})}
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.addTaskText}>Add Task Here</Text>
            <Icon name={'plus-circle'} size={hp(3)} color={Colors.white} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleLogout}
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.addTaskText}>Log Out</Text>
            <Icon name={'sign-out'} size={hp(3)} color={Colors.white} />
          </TouchableOpacity>
        </View>
        <TaskList />
      </View>
    </SafeAreaWrapper>
  );
};

export default DashboardScreen;
