import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {RootStackParamListType} from 'application/stacks/main-stack/main-stack';

export type IOSPostsScreenRoutePropType = RouteProp<RootStackParamListType, 'PostDescription'>;
export type IOSPostsNavigationPropType = StackNavigationProp<RootStackParamListType, 'PostDescription'>;

export type IOSPostsType = {
  navigation: IOSPostsNavigationPropType;
  route: IOSPostsScreenRoutePropType;
};
