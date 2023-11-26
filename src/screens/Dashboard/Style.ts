import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Colors} from '../../themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: hp(2),
    paddingTop: hp(2),
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dashboardText: {
    letterSpacing: 1.1,
    fontSize: hp(2.8),
    fontWeight: 'bold',
    color: Colors.blue100,
  },
  addTaskText: {
    fontSize: hp(2),
    fontWeight: 'bold',
    color: Colors.white,
    marginRight: wp(3),
    letterSpacing: 1.2,
  },
});

export default styles;
