import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {RootStackParamListType} from 'application/stacks/main-stack/main-stack';

export type PostDescriptionScreenRoutePropType = RouteProp<RootStackParamListType, 'PostDescription'>;
export type PostDescriptionNavigationPropType = StackNavigationProp<RootStackParamListType, 'PostsStack'>;

export type PostDescriptionType = {
  navigation: PostDescriptionNavigationPropType;
  route: PostDescriptionScreenRoutePropType;
};
