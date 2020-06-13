import React, {ReactElement} from 'react';
import {View, Text} from 'react-native';

const App = (): ReactElement => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
      }}>
      <Text> Hello</Text>
    </View>
  );
};

export default App;
