import 'react-native-gesture-handler';
import React, {ReactElement} from 'react';
import {NavigationContainer} from '@react-navigation/native';

//components
import StatusBar from './components/status-bar';

// Redux
import {Provider} from 'react-redux';
import store from './store';

// Stack
import MainStack from './stacks';

const App = (): ReactElement => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar backgroundColor="green" barStyle="light-content" />
        <MainStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
