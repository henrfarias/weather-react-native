import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import store from './store';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Routes />
      <StatusBar style='auto' />
    </Provider>
  );
}

export default App;