import React, {ReactElement} from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

const iOSPosts = (): ReactElement => {
  return (
    <View>
      <Text>Hello iOS</Text>
    </View>
  );
};

const Stack = createStackNavigator();

const PostStack = (): ReactElement => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="iosPosts" component={iOSPosts} />
    </Stack.Navigator>
  );
};

export default PostStack;
