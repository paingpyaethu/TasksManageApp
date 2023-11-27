import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Colors} from '../../themes';

const styles = StyleSheet.create({
  flatListContainer: {
    backgroundColor: Colors.blue100,
    paddingVertical: hp(1),
    paddingLeft: wp(4),
    borderRadius: hp(1),
    marginBottom: hp(2),
  },
  rowCenter: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleText: {
    fontSize: hp(2.3),
    color: Colors.primary,
    fontWeight: 'bold',
    letterSpacing: 1.2,
    marginBottom: hp(1),
  },
  descText: {
    fontSize: hp(2),
    color: Colors.primary,
    letterSpacing: 1.2,
  },
  date: {
    backgroundColor: Colors.darkBlue,
    color: Colors.white,
    fontSize: hp(1.8),
    padding: hp(1),
    borderRadius: hp(1),
    marginRight: wp(3),
  },

  // Tabs
  tabContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.darkBlue,
    borderRadius: hp(2),
    marginVertical: hp(2),
    overflow: 'hidden',
  },
  tabs: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: wp(50),
    height: hp(7),
  },
  tabText: {
    fontSize: hp(2),
    fontWeight: '800',
    letterSpacing: 1.2,
  },
});

export default styles;
