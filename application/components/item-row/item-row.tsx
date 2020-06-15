import React, {ReactElement} from 'react';
import {Text, View, Platform, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// types
import type {ItemRowType} from './item-row.types';

// style
import style from './item-row.style';

const ItemRow = ({read, favorite, body, id, userId, onPress}: ItemRowType): ReactElement => {
  const ios = Platform.OS === 'ios' ? true : false;
  return (
    <TouchableHighlight
      underlayColor="#ffffff"
      style={style.container}
      onPress={(): void => {
        onPress(id, userId);
      }}>
      <>
        <View style={style.left}>
          {!read && <View style={style.circle} />}
          {ios && read && favorite && <Icon name="ios-star" size={20} color="yellow" />}
        </View>
        <View style={style.center}>
          <Text style={style.centerText}>{body}</Text>
        </View>
        <View style={style.right}>
          {ios && <Icon name="ios-arrow-forward" size={20} color="gray" />}
          {!ios && favorite && <Icon name="ios-star" size={20} color="yellow" />}
        </View>
      </>
    </TouchableHighlight>
  );
};

export default ItemRow;
