/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import Icon from 'react-native-vector-icons/FontAwesome';

import Input from '../../components/common/Input/Input';
import SafeAreaWrapper from '../../components/common/SafeAreaWrapper/SafeAreaWrapper';
import {Image} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Button from '../../components/common/Button/Button';
import {Colors} from '../../themes';
import {useTasks} from '../../hooks/useTasks/useTasks';
import {getFormattedDateTime} from '../../utils/HelperFunc';
import {RouteProp, useRoute} from '@react-navigation/native';
import {DashboardStackParamList} from '../../../types/Dashboard/DashboardStackType';
import notifee, {Notification, TriggerType} from '@notifee/react-native';
import {AndroidMessageChannelId} from '../../utils/Notification';

type AddTaskScreenRouteType = RouteProp<
  DashboardStackParamList,
  'AddTaskScreen'
>;

const AddTasksScreen = ({navigation}: any) => {
  const route = useRoute<AddTaskScreenRouteType>();
  const taskToEdit = route.params?.taskToEdit;

  const {addTask, editTask} = useTasks();

  const [title, setTitle] = useState(taskToEdit ? taskToEdit.title : '');
  const [desc, setDesc] = useState(taskToEdit ? taskToEdit.description : '');
  const [date, setDate] = useState(new Date());

  const [isDisplayDate, setIsDisplayDate] = useState(taskToEdit ? true : false);
  const [open, setOpen] = useState(false);
  const [isDate, setIsDate] = useState(taskToEdit ? true : false);

  const reminderNotification: Notification = {
    id: '1',
    title: `🔔 You set for this task -  ${title} at ${getFormattedDateTime(
      date,
    )}`,
    body: 'Tap on it to check',
    android: {
      channelId: AndroidMessageChannelId,
    },
    data: {
      id: '1',
      action: 'reminder',
      details: {
        title: title,
        desc: desc,
        date: getFormattedDateTime(date),
      },
    },
  };

  const handleAddTask = async () => {
    if (taskToEdit) {
      editTask(taskToEdit.id, {
        title: title,
        description: desc,
        date: getFormattedDateTime(date),
      });
      navigation.goBack();
    } else {
      if (title.trim() !== '') {
        addTask(title, desc, date);
        setTitle('');
        setDesc('');
        setDate(new Date());
        setIsDate(false);
        navigation.goBack();
      }
    }
    await notifee.createTriggerNotification(reminderNotification, {
      type: TriggerType.TIMESTAMP,
      timestamp: +date,
    });
  };

  return (
    <SafeAreaWrapper>
      <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.8}>
        <Icon
          name={'arrow-circle-left'}
          size={hp(5)}
          color={Colors.white}
          style={{margin: wp(5)}}
        />
      </TouchableOpacity>
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          source={require('../../../assets/images/add_tasks.png')}
          resizeMode="contain"
          style={{width: wp(80), height: hp(30)}}
        />
        <Input
          placeholder="Add Title"
          value={title}
          onChangeText={text => setTitle(text)}
        />
        <Input
          placeholder="Add Description"
          value={desc}
          onChangeText={text => setDesc(text)}
        />

        <Pressable onPress={() => setOpen(true)} style={[styles.input]}>
          {!isDate ? (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon name={'calendar'} size={hp(3)} color={Colors.secondary} />
              <Text style={styles.dateText}>{'Set Reminder'}</Text>
            </View>
          ) : (
            <View
              style={{
                width: wp(70),
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Icon name={'calendar'} size={hp(3)} color={Colors.secondary} />
              <Text style={styles.dateText}>
                {isDisplayDate ? taskToEdit?.date : getFormattedDateTime(date)}
              </Text>
            </View>
          )}
        </Pressable>
        <Button label="Submit" onPress={handleAddTask} />
      </ScrollView>
      {open && (
        <DatePicker
          modal
          open={open}
          date={date}
          onConfirm={d => {
            setOpen(false);
            setIsDate(true);
            setIsDisplayDate(false);
            setDate(d);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
      )}
    </SafeAreaWrapper>
  );
};

export default AddTasksScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
  },
  input: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    height: hp(7),
    backgroundColor: Colors.darkBlue,
    borderColor: Colors.blue200,
    borderWidth: wp(0.2),
    borderRadius: hp(2),
    marginVertical: hp(1.5),
    paddingHorizontal: wp(3),
  },
  dateText: {
    fontSize: hp(2),
    letterSpacing: 1.1,
    color: Colors.white,
    marginLeft: wp(3),
  },
});
