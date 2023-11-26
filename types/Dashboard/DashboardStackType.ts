import {StackNavigationProp} from '@react-navigation/stack';

export type DashboardStackParamList = {
  DashboardScreen: undefined;
  AddTaskScreen: {taskToEdit?: TaskType};
};

export type DashboardScreenNavigationType =
  StackNavigationProp<DashboardStackParamList>;
