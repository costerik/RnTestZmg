import React, {ReactElement} from 'react';
import {Text, View} from 'react-native';

// types
import type {FavoritesPostsType} from './favorites-posts.types';

// style
import style from './favorites-posts.style';

const FavoritesPosts = ({}: FavoritesPostsType): ReactElement => {
  return (
    <View style={style.container}>
      <Text>Favorites Post</Text>
    </View>
  );
};

export default FavoritesPosts;
