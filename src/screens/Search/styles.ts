import styled from 'styled-components/native';
import { View, Text } from 'react-native';
import { colors } from '../../utils/variables';

export const Container = styled(View)`
  flex: 1;
  margin: 0 8px;
`;

export const Label = styled(Text)`
  font-size: 16px;
  color: ${colors.reading};
  margin: 12px 0
`;

export const ContainerButtons = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  margin: 12px 0 0;
`;
