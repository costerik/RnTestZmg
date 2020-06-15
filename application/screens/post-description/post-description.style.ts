import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  descriptionWrapper: {},
  title: {
    fontSize: 20,
    marginVertical: 15,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  description: {
    opacity: 0.7,
    marginHorizontal: 10,
  },
  userData: {
    opacity: 0.7,
    marginHorizontal: 10,
  },
  wrapperTitle: {
    height: 40,
    backgroundColor: 'rgba(0,0,0,0.1)',
    justifyContent: 'center',
    marginTop: 15,
    fontWeight: 'bold',
  },
  commentsTitle: {
    textTransform: 'uppercase',
    marginVertical: 0,
    marginHorizontal: 10,
  },
  comment: {
    opacity: 0.7,
    textAlign: 'justify',
    marginTop: 10,
    marginBottom: 15,
  },
  wrapperComment: {
    minHeight: 50,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.1)',
    marginHorizontal: 10,
  },
  flexCenter: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
