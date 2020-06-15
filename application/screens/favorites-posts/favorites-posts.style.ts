import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  flexCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backTextWhite: {
    color: '#FFF',
  },
  rowBack: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(231,76,60,1)',
    flex: 1,
    flexDirection: 'row',
    marginTop: 5,
  },
  backRightBtn: {
    paddingRight: 15,
  },
});
