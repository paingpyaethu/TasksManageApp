/* eslint-disable react-native/no-inline-styles */
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Icon from 'react-native-vector-icons/Feather';

import SafeAreaWrapper from '../common/SafeAreaWrapper/SafeAreaWrapper';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Colors} from '../../themes';
import {flatlistKeyExtractor} from '../../utils/HelperFunc';
import {useTasks} from '../../hooks/useTasks/useTasks';
import {createTwoButtonAlert} from '../common/SystemAlert/SystemAlert';
import {useNavigation} from '@react-navigation/native';
import {DashboardScreenNavigationType} from '../../../types/Dashboard/DashboardStackType';
import styles from './Style';
import SearchFilter from '../common/SearchFilter/SearchFilter';

const TaskList = () => {
  const {tasks, toggleTask, deleteTask} = useTasks();
  const navigation = useNavigation<DashboardScreenNavigationType>();

  const [showComplete, setShowComplete] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const [completeMessage, setCompleteMessage] = useState(
    'Are you sure you want to complete this task?!',
  );

  const handleSearch = (query: string) => {
    setSearchTerm(query);
  };

  const filteredTasks = tasks.filter(
    task =>
      (showComplete ? task.completed : !task.completed) &&
      task.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleCheckboxPress = (id: number) => {
    setCompleteMessage(
      showComplete
        ? 'Are you sure you want to complete this task?!'
        : 'Are you sure you want to incomplete this task?!',
    );
    return createTwoButtonAlert({
      title: 'Warning',
      message: completeMessage,
      onPressCancel: () => {},
      onPressOk: () => {
        toggleTask(id);
      },
    });
  };

  const handleEditTask = (task: TaskType) => {
    navigation.navigate('AddTaskScreen', {taskToEdit: task});
  };

  const handleDeleteTask = (id: number) => {
    return createTwoButtonAlert({
      title: 'Warning',
      message: 'Are you sure you want to delete?!',
      onPressCancel: () => {},
      onPressOk: () => {
        deleteTask(id);
      },
    });
  };

  const renderItem = ({item}: {item: TaskType}) => {
    return (
      <View style={styles.flatListContainer}>
        <View>
          <View style={styles.rowCenter}>
            <View>
              <Text style={styles.titleText}>{item.title}</Text>
              <Text style={styles.descText}>{item.description}</Text>
            </View>
            <BouncyCheckbox
              size={hp(3.5)}
              isChecked={item.completed}
              disableBuiltInState
              fillColor={Colors.secondary}
              unfillColor={Colors.blue200}
              innerIconStyle={{borderWidth: wp(0.5), borderRadius: hp(1)}}
              onPress={() => handleCheckboxPress(item.id)}
            />
          </View>
          <View style={[styles.rowCenter, {marginTop: hp(2)}]}>
            <Text style={styles.date}>{item?.date}</Text>
            <View style={{flexDirection: 'row', marginRight: wp(3)}}>
              <TouchableOpacity onPress={() => handleEditTask(item)}>
                <Icon
                  name={'edit'}
                  size={hp(3.2)}
                  color={Colors.secondary}
                  style={{marginRight: wp(3)}}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDeleteTask(item.id)}>
                <Icon name={'trash'} size={hp(3)} color={Colors.trashColor} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaWrapper>
      <SearchFilter onSearch={handleSearch} />

      <View style={styles.tabContainer}>
        <TouchableOpacity
          onPress={() => setShowComplete(false)}
          style={[
            styles.tabs,
            showComplete
              ? {backgroundColor: Colors.secondary}
              : {backgroundColor: Colors.darkBlue},
          ]}>
          <Text
            style={[
              styles.tabText,
              showComplete
                ? {color: Colors.darkBlue}
                : {color: Colors.secondary},
            ]}>
            Pending
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setShowComplete(true)}
          style={[
            styles.tabs,
            showComplete
              ? {backgroundColor: Colors.darkBlue}
              : {backgroundColor: Colors.secondary},
          ]}>
          <Text
            style={[
              styles.tabText,
              showComplete
                ? {color: Colors.secondary}
                : {color: Colors.darkBlue},
            ]}>
            Complete
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={filteredTasks}
        renderItem={renderItem}
        keyExtractor={flatlistKeyExtractor}
        contentContainerStyle={{paddingBottom: hp(2)}}
      />
    </SafeAreaWrapper>
  );
};

export default TaskList;
