import React, {ReactElement} from 'react';
import {Text, View} from 'react-native';

// types
import type {PostDescriptionType} from './post-description.types';

// style
import style from './post-description.style';

const PostDescription = ({}: PostDescriptionType): ReactElement => {
  return (
    <View style={style.container}>
      <Text>Post Description</Text>
    </View>
  );
};

export default PostDescription;
