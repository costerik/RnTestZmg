import 'react-native-gesture-handler';
import React, {ReactElement} from 'react';
import {NavigationContainer} from '@react-navigation/native';

// Stack
import MainStack from './stacks';

const App = (): ReactElement => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default App;
