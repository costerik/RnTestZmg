import React, {ReactElement} from 'react';
import {View, StatusBar, StatusBarProps} from 'react-native';
import styles from './status-bar.style';
const MyStatusBar = ({backgroundColor, ...props}: StatusBarProps): ReactElement => (
  <View style={[styles.statusBar, {backgroundColor}]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);
export default MyStatusBar;
