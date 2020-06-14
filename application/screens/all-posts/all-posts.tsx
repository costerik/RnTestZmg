import React, {ReactElement} from 'react';
import {Text, View} from 'react-native';
import ActionButton from 'react-native-action-button';
//import Icon from 'react-native-vector-icons/Ionicons';

// types
import type {AllPostsType} from './all-posts.types';

// style
import style from './all-posts.style';

const AllPosts = ({}: AllPostsType): ReactElement => {
  return (
    <View style={style.container}>
      <Text>All Post</Text>
      <ActionButton buttonColor="rgba(231,76,60,1)" />
    </View>
  );
};

export default AllPosts;
//renderIcon={(): ReactElement => <Icon name="md-trash" size={25} color="#ffffff" />}
