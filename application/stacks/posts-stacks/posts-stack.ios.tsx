import React, {ReactElement} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// types
export type PostsStackParamListType = {
  IOSPosts: undefined;
};

// screens
import IOSPosts from '../../screens/ios-posts';

const Stack = createStackNavigator<PostsStackParamListType>();

const PostsStack = (): ReactElement => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="IOSPosts" component={IOSPosts} />
    </Stack.Navigator>
  );
};

export default PostsStack;
