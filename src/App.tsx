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

const View = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${colors.light};
`;

const Text = styled.Text`
  color: ${colors.dark};
`;

export default App;