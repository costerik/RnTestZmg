import React, {ReactElement} from 'react';
import {Text, View} from 'react-native';
import ActionButton from 'react-native-action-button';
//import Icon from 'react-native-vector-icons/Ionicons';

// types
import type {FavoritesPostsType} from './favorites-posts.types';

// style
import style from './favorites-posts.style';

const FavoritesPosts = ({}: FavoritesPostsType): ReactElement => {
  return (
    <View style={style.container}>
      <Text>Favorites Post</Text>
      <ActionButton buttonColor="rgba(231,76,60,1)" />
    </View>
  );
};

export default FavoritesPosts;

//renderIcon={(): ReactElement => <Icon name="md-trash" size={25} color="#ffffff" />}
