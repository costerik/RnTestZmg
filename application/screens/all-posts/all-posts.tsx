import React, {ReactElement} from 'react';
import {Text, View} from 'react-native';
import ActionButton from 'react-native-action-button';
import {useSelector} from 'react-redux';
//import Icon from 'react-native-vector-icons/Ionicons';

// types
import type {AllPostsType} from './all-posts.types';
import type {ReturnRootStateType} from '../../reducers/reducers';

//components
import ItemRow from '../../components/item-row';

// style
import style from './all-posts.style';

const AllPosts = ({}: AllPostsType): ReactElement => {
  const posts = useSelector((state: ReturnRootStateType) => state.postsReducer.posts);
  console.log(posts);
  return (
    <View style={style.container}>
      <Text>All Post</Text>
      {posts.slice(0, 5).map(
        (e): ReactElement => {
          return <ItemRow key={e.id} body={e.body} read={false} favorite={true} />;
        },
      )}
      <ActionButton buttonColor="rgba(231,76,60,1)" />
    </View>
  );
};

export default AllPosts;
//renderIcon={(): ReactElement => <Icon name="md-trash" size={25} color="#ffffff" />}
