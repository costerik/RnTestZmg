import React, {ReactElement} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {Text, View, ScrollView, ActivityIndicator} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

// actions
import {fetchUserData, fetchComments, cleanSelectedPost} from '../../reducers/posts-reducer/actions';

// types
import type {PostDescriptionType} from './post-description.types';
import type {ReturnRootStateType} from '../../reducers/reducers';

// style
import style from './post-description.style';

const PostDescription = ({route}: PostDescriptionType): ReactElement => {
  const {id, userId} = route.params;
  const dispatch = useDispatch();

  const fetchData = async (): Promise<void> => {
    await Promise.all([dispatch(fetchUserData(userId)), dispatch(fetchComments(id))]);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  const state = useSelector((state: ReturnRootStateType) => state.postsReducer);
  const [post] = React.useState(() => {
    return state.posts.find((e) => e.id === id);
  });

  useFocusEffect(
    React.useCallback(() => {
      return (): void => {
        dispatch(cleanSelectedPost());
      };
    }, []),
  );

  return (
    <ScrollView style={style.container} contentContainerStyle={{flexGrow: 1}}>
      {state.state !== 'FETCHING' ? (
        <>
          <View>
            <Text style={style.title}>Description</Text>
            <Text style={style.description}>{post?.body}</Text>
          </View>
          <View>
            <Text style={style.title}>User</Text>
            <Text style={style.userData}>{`Name    : ${state.postSelected.user?.name || ''}`}</Text>
            <Text style={style.userData}>{`Email   : ${state.postSelected.user?.email || ''}`}</Text>
            <Text style={style.userData}>{`Phone   : ${state.postSelected.user?.phone || ''}`}</Text>
            <Text style={style.userData}>{`Website : ${state.postSelected.user?.website || ''}`}</Text>
          </View>
          <View>
            <View style={style.wrapperTitle}>
              <Text style={[style.title, style.commentsTitle]}>comments</Text>
            </View>
            {state.postSelected.comments.map((e, index) => {
              return (
                <View key={`${index.toString()}`} style={style.wrapperComment}>
                  <Text style={style.comment}>{e.body}</Text>
                </View>
              );
            })}
          </View>
        </>
      ) : (
        <View style={style.flexCenter}>
          <ActivityIndicator color="green" />
        </View>
      )}
    </ScrollView>
  );
};

export default PostDescription;
