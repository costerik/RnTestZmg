import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {RootStackParamListType} from 'application/stacks/main-stack/main-stack';

export type FavoritesPostsScreenRoutePropType = RouteProp<RootStackParamListType, 'PostDescription'>;
export type FavoritesPostsNavigationPropType = StackNavigationProp<RootStackParamListType, 'PostDescription'>;

export type FavoritesPostsType = {
  navigation: FavoritesPostsNavigationPropType;
  route: FavoritesPostsScreenRoutePropType;
};
