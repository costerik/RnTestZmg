import React, {ReactElement} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// screens
import IOSPosts from '../../screens/ios-posts';

const Stack = createStackNavigator();

const PostStack = (): ReactElement => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="IOSPosts" component={IOSPosts} />
    </Stack.Navigator>
  );
};

export default PostStack;
