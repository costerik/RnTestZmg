import React, {ReactElement} from 'react';
import {Text, View} from 'react-native';

// types
import type {AllPostsType} from './all-posts.types';

// style
import style from './all-posts.style';

const AllPosts = ({}: AllPostsType): ReactElement => {
  return (
    <View style={style.container}>
      <Text>All Post</Text>
    </View>
  );
};

export default AllPosts;
