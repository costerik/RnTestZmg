import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  activeFontStyle: {color: '#ffffff'},
  segmentedControlStyle: {
    backgroundColor: '#ffffff',
    borderColor: 'green',
    borderWidth: 2,
    marginHorizontal: 30,
    marginTop: 10,
  },
  button: {
    backgroundColor: 'rgba(231,76,60,1)',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
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
