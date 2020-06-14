import 'react-native-gesture-handler';
import React, {ReactElement} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import StatusBar from './components/status-bar';

// Stack
import MainStack from './stacks';

const App = (): ReactElement => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="green" barStyle="light-content" />
      <MainStack />
    </NavigationContainer>
  );
};

export default App;
