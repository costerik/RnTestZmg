import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    minHeight: 50,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    marginTop: 5,
  },
  circle: {
    height: 10,
    width: 10,
    backgroundColor: 'blue',
    borderRadius: 10,
  },
  left: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  center: {
    flex: 1,
  },
  right: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerText: {
    opacity: 0.7,
    textAlign: 'justify',
  },
});
