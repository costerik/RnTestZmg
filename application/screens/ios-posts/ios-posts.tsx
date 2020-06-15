import React, {ReactElement} from 'react';
import {Text, TouchableOpacity, View, ActivityIndicator} from 'react-native';
import SegmentedControl from '@react-native-community/segmented-control';
import {useSelector, useDispatch} from 'react-redux';
import {SwipeListView} from 'react-native-swipe-list-view';

//components
import ItemRow from '../../components/item-row';

// actions
import {swipeUpdatePosts, deleteAllPosts} from '../../reducers/posts-reducer/actions';

// types
import type {IOSPostsType} from './ios-posts.types';
import type {ReturnRootStateType} from '../../reducers/reducers';
import {PostType} from '../../reducers/posts-reducer/types';

// style
import style from './ios-posts.style';

const IOSPosts = ({}: IOSPostsType): ReactElement => {
  const [filter, setFilter] = React.useState(0);
  const dispatch = useDispatch();
  const posts = useSelector((state: ReturnRootStateType) =>
    state.postsReducer.posts.filter((e) => {
      if (filter === 1) {
        if (e.favorite) {
          return e;
        }
      } else {
        return e;
      }
    }),
  );
  const state = useSelector((state: ReturnRootStateType) => state.postsReducer.state);

  const deleteRow = (rowKey: string): void => {
    const newData = [...posts];
    const prevIndex = posts.findIndex((item) => item.key === rowKey);
    newData.splice(prevIndex, 1);
    dispatch(swipeUpdatePosts(newData));
  };

  const renderItem = (data: {index: number; item: PostType}): ReactElement => {
    return <ItemRow {...data.item} />;
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
      <View style={style.flex}>
        <SegmentedControl
          values={['All', 'Favorites']}
          selectedIndex={filter}
          onChange={(event): void => {
            setFilter(event.nativeEvent.selectedSegmentIndex);
          }}
          tintColor="green"
          activeFontStyle={style.activeFontStyle}
          style={style.segmentedControlStyle}
        />
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
      </View>
      <TouchableOpacity
        style={style.button}
        onPress={(): void => {
          dispatch(deleteAllPosts());
        }}>
        <Text style={style.buttonText}>Delete All</Text>
      </TouchableOpacity>
    </View>
  );
};

export default IOSPosts;
