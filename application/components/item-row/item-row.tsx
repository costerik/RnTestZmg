import React, {ReactElement} from 'react';
import {Text, View, Platform, TouchableHighlight} from 'react-native';

// types
import type {ItemRowType} from './item-row.types';

// style
import style from './item-row.style';

const ItemRow = ({read, favorite, body}: ItemRowType): ReactElement => {
  const ios = Platform.OS === 'ios' ? true : false;
  return (
    <TouchableHighlight style={style.container}>
      <>
        <View style={style.left}>
          {!read && <View style={style.circle} />}
          {ios && read && favorite && <View style={{...style.circle, backgroundColor: 'yellow'}} />}
        </View>
        <View style={style.center}>
          <Text style={style.centerText}>{body}</Text>
        </View>
        <View style={style.right}>
          {ios && <View style={{...style.circle, backgroundColor: 'gray'}} />}
          {!ios && favorite && <View style={{...style.circle, backgroundColor: 'yellow'}} />}
        </View>
      </>
    </TouchableHighlight>
  );
};

export default ItemRow;
