import React, {ReactElement} from 'react';
import {TouchableOpacity} from 'react-native';
//import Icon from 'react-native-vector-icons/Ionicons';

// types
import type {HeaderRightType} from './header-right.types';

// style
import style from './header-right.style';

const HeaderRight = ({
  //name = 'ios-refresh',
  //size = 30,
  //color = '#ffffff',
  onPress,
}: HeaderRightType): ReactElement => {
  return (
    <TouchableOpacity style={style.container} onPress={onPress}>
      {/*<Icon name={name} size={size} color={color} />*/}
    </TouchableOpacity>
  );
};

export default HeaderRight;
