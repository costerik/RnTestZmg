import React, {ReactElement} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useDispatch} from 'react-redux';

// actions
import {fetchPosts} from '../../reducers/posts-reducer/actions';

// components
import HeaderRight from '../../components/header-right';

// Screens
import PostDescription from '../../screens/post-description';

// Stacks
import PostsStack from '../posts-stacks';

const Stack = createStackNavigator();

const MainStack = (): ReactElement => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'green',
        },
        headerTintColor: '#ffffff',
      }}>
      <Stack.Screen
        name="PostsStack"
        options={{
          title: 'Posts',
          headerRight: (): ReactElement => {
            return <HeaderRight />;
          },
        }}
        component={PostsStack}
      />
      <Stack.Screen
        name="PostDescription"
        options={{
          title: 'Post',
          headerRight: (): ReactElement => {
            return <HeaderRight name="ios-star-outline" />;
          },
        }}
        component={PostDescription}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
