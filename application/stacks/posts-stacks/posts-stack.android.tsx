import React, {ReactElement} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

// Screens
import AllPosts from '../../screens/all-posts';
import FavoritesPosts from '../../screens/favorites-posts';

const Tab = createMaterialTopTabNavigator();

const PostsStack = (): ReactElement => {
  return (
    <Tab.Navigator
      swipeEnabled={false}
      tabBarOptions={{
        indicatorStyle: {
          backgroundColor: '#ffffff',
        },
        activeTintColor: '#ffffff',
        inactiveTintColor: '#e3e3e3',
        style: {backgroundColor: 'green'},
      }}>
      <Tab.Screen name="All" component={AllPosts} />
      <Tab.Screen name="Favorites" component={FavoritesPosts} />
    </Tab.Navigator>
  );
};

export default PostsStack;
