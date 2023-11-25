import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {DASHBOARD_SCREEN} from '../routeNames';
import DashboardScreen from '../../screens/Dashboard/DashboardScreen';

const Stack = createStackNavigator();

const DashboardStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={DASHBOARD_SCREEN} component={DashboardScreen} />
    </Stack.Navigator>
  );
};

export default DashboardStackNavigator;
