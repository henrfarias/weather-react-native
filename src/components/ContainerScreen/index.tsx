import React from 'react';
import { Container } from './styles';
import { colors } from '../../utils/variables';

const ContainerScreen: React.FC = ({ children }) => {
  return (
    <Container
      colors={[`${colors.background2}`, `${colors.background}`]}
    >
      {children}
    </Container>
  );
}

export default ContainerScreen;