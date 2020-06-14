import 'react-native-gesture-handler';
import React, {ReactElement} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

// Redux
import {Provider} from 'react-redux';
import store from './store';

// Stack
import MainStack from './stacks';

const App = (): ReactElement => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'green'}}>
      <Provider store={store}>
        <NavigationContainer>
          <StatusBar backgroundColor="green" barStyle="light-content" />
          <MainStack />
        </NavigationContainer>
      </Provider>
    </SafeAreaView>
  );
};

export default App;
