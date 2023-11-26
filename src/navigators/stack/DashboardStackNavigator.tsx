import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DashboardScreen from '../../screens/Dashboard/DashboardScreen';
import AddTasksScreen from '../../screens/AddTasks/AddTasksScreen';
import {DashboardStackParamList} from '../../../types/Dashboard/DashboardStackType';

const Stack = createStackNavigator<DashboardStackParamList>();

const DashboardStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'DashboardScreen'} component={DashboardScreen} />
      <Stack.Screen name={'AddTaskScreen'} component={AddTasksScreen} />
    </Stack.Navigator>
  );
};

export default DashboardStackNavigator;
