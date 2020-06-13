import 'react-native-gesture-handler';
import React, {ReactElement} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {View, Text} from 'react-native';

const App = (): ReactElement => {
  return (
    <NavigationContainer>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
        }}>
        <Text> Hello</Text>
      </View>
    </NavigationContainer>
  );
};

export default App;
