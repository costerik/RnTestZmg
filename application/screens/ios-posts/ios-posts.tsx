import React, {ReactElement} from 'react';
import {Text, View} from 'react-native';
import SegmentedControl from '@react-native-community/segmented-control';
import {useSelector} from 'react-redux';

// types
import type {IOSPostsType} from './ios-posts.types';

// style
import style from './ios-posts.style';
import type {ReturnRootStateType} from '../../reducers/reducers';

const IOSPosts = ({}: IOSPostsType): ReactElement => {
  const [filter, setFilter] = React.useState(0);
  const posts = useSelector((state: ReturnRootStateType) => state.postsReducer.posts);
  console.log(posts);
  return (
    <View style={style.container}>
      <SegmentedControl
        values={['One', 'Two']}
        selectedIndex={filter}
        onChange={(event): void => {
          setFilter(event.nativeEvent.selectedSegmentIndex);
        }}
        tintColor="green"
        activeFontStyle={style.activeFontStyle}
        style={style.segmentedControlStyle}
      />
      <Text>IOS Posts</Text>
    </View>
  );
};

export default IOSPosts;
