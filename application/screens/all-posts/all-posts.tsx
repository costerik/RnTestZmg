import React, {ReactElement} from 'react';
import {Text, View, TouchableOpacity, ActivityIndicator} from 'react-native';
import ActionButton from 'react-native-action-button';
//import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector, useDispatch} from 'react-redux';
import {SwipeListView} from 'react-native-swipe-list-view';

//components
import ItemRow from '../../components/item-row';

// actions
import {swipeUpdatePosts, deleteAllPosts} from '../../reducers/posts-reducer/actions';

// types
import type {AllPostsType} from './all-posts.types';
import type {ReturnRootStateType} from '../../reducers/reducers';
import {PostType} from '../../reducers/posts-reducer/types';

// style
import style from './all-posts.style';

const AllPosts = ({navigation}: AllPostsType): ReactElement => {
  const posts = useSelector((state: ReturnRootStateType) => state.postsReducer.posts);
  const state = useSelector((state: ReturnRootStateType) => state.postsReducer.state);
  const dispatch = useDispatch();

  const deleteRow = (rowKey: string): void => {
    const newData = [...posts];
    const prevIndex = posts.findIndex((item) => item.key === rowKey);
    newData.splice(prevIndex, 1);
    dispatch(swipeUpdatePosts(newData));
  };

  const renderItem = (data: {index: number; item: PostType}): ReactElement => {
    return (
      <ItemRow
        {...data.item}
        onPress={(id, userId): void => {
          navigation.navigate('PostDescription', {id, userId});
        }}
      />
    );
  };

  const renderHiddenItem = (data: {index: number; item: PostType}): ReactElement => {
    return (
      <View style={style.rowBack}>
        <TouchableOpacity style={style.backRightBtn} onPress={(): void => deleteRow(data.item.key)}>
          <Text style={style.backTextWhite}>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={style.container}>
      {state === 'FETCHING' ? (
        <View style={style.flexCenter}>
          <ActivityIndicator color="green" />
        </View>
      ) : (
        <SwipeListView
          disableRightSwipe
          data={posts}
          renderItem={renderItem}
          renderHiddenItem={renderHiddenItem}
          leftOpenValue={75}
          rightOpenValue={-150}
          previewRowKey={'0'}
          previewOpenValue={-40}
          previewOpenDelay={3000}
        />
      )}
      <ActionButton
        buttonColor="rgba(231,76,60,1)"
        onPress={(): void => {
          dispatch(deleteAllPosts());
        }}
      />
    </View>
  );
};

export default AllPosts;
//renderIcon={(): ReactElement => <Icon name="md-trash" size={25} color="#ffffff" />}
