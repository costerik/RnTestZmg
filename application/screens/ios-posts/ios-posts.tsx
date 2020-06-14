import React, {ReactElement} from 'react';
import {Text, View} from 'react-native';

// types
import type {IOSPostsType} from './ios-posts.types';

// style
import style from './ios-posts.style';

const IOSPosts = ({}: IOSPostsType): ReactElement => {
  return (
    <View style={style.container}>
      <Text>IOS Posts</Text>
    </View>
  );
};

export default IOSPosts;
