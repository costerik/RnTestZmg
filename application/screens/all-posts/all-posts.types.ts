import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {RootStackParamListType} from 'application/stacks/main-stack/main-stack';

export type AllPostsScreenRoutePropType = RouteProp<RootStackParamListType, 'PostDescription'>;
export type AllPostsNavigationPropType = StackNavigationProp<RootStackParamListType, 'PostDescription'>;

export type AllPostsType = {
  navigation: AllPostsNavigationPropType;
  route: AllPostsScreenRoutePropType;
};
