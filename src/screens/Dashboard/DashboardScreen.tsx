/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import SafeAreaWrapper from '../../components/common/SafeAreaWrapper/SafeAreaWrapper';
import {Colors} from '../../themes';
import styles from './Style';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import TaskList from '../../components/TaskList/TaskList';

const DashboardScreen = ({navigation}: any) => {
  return (
    <SafeAreaWrapper>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.primary} />
      <View style={styles.container}>
        <View style={styles.rowCenter}>
          <Text style={styles.dashboardText}>Dashboard</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('AddTaskScreen')}
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.addTaskText}>Add Task Here</Text>
            <Icon name={'plus-circle'} size={hp(3)} color={Colors.white} />
          </TouchableOpacity>
        </View>
        <TaskList />
      </View>
    </SafeAreaWrapper>
  );
};

export default DashboardScreen;
