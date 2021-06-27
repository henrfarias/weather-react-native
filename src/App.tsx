import React from 'react';
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';
import { colors } from './utils/variables';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <>
      <Routes />
      <StatusBar style='auto' />
    </>
  );
}

export default App;