import React, {ReactElement} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Screens
import PostDescription from '../../screens/post-description';

// Stacks
import PostsStack from '../posts-stacks';

const Stack = createStackNavigator();

const MainStack = (): ReactElement => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PostsStack" options={{title: 'Posts'}} component={PostsStack} />
      <Stack.Screen name="PostsDescription" options={{title: 'Description'}} component={PostDescription} />
    </Stack.Navigator>
  );
};

export default MainStack;
