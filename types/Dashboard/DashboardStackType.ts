import {StackNavigationProp} from '@react-navigation/stack';

export type DashboardStackParamList = {
  DashboardScreen: undefined;
  AddTaskScreen: {taskToEdit?: TaskType};
  DetailScreen: {taskDetail?: any};
};

export type DashboardScreenNavigationType =
  StackNavigationProp<DashboardStackParamList>;
