import React, {ReactElement} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useDispatch, useSelector} from 'react-redux';

// actions
import {fetchPosts, updatePost} from '../../reducers/posts-reducer/actions';

// components
import HeaderRight from '../../components/header-right';

// Screens
import PostDescription from '../../screens/post-description';

// type
export type RootStackParamListType = {
  PostsStack: undefined;
  PostDescription: {id: number; userId: number};
};
import type {ReturnRootStateType} from '../../reducers/reducers';

// Stacks
import PostsStack from '../posts-stacks';
import {get} from '../../utilities/async-storage';

const Stack = createStackNavigator<RootStackParamListType>();

const isFavorite = async (selectedPostId: number): Promise<boolean> => {
  const readFav = await get<Array<number>>('FAVORITE');
  if (readFav) {
    const found = readFav.find((e) => e === selectedPostId);
    if (found) {
      return true;
    }
    return false;
  }
  return false;
};

const MainStack = (): ReactElement => {
  const dispatch = useDispatch();
  const state = useSelector((state: ReturnRootStateType) => state.postsReducer);

  React.useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const isFav = state.posts.find((e) => {
    return e.id === state.postSelected.post?.id && e.favorite === true;
  });

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
            return (
              <HeaderRight
                onPress={(): void => {
                  dispatch(fetchPosts());
                }}
              />
            );
          },
        }}
        component={PostsStack}
      />
      <Stack.Screen
        name="PostDescription"
        options={{
          title: 'Post',
          headerRight: (): ReactElement => {
            return (
              <HeaderRight
                name={isFav ? 'ios-star' : 'ios-star-outline'}
                onPress={async (): Promise<void> => {
                  const fav = await isFavorite(state.postSelected.post?.id as number);
                  dispatch(updatePost(state.postSelected.post?.id as number, 'favorite', !fav));
                }}
              />
            );
          },
        }}
        component={PostDescription}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
