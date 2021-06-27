import styled from 'styled-components/native';
import { View, Text } from 'react-native';
import { colors } from '../../utils/variables';
import { BorderlessButton } from 'react-native-gesture-handler';

export const ContainerItem = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.background};
  padding: 0 12px;
  margin-bottom: 8px;
  height: 64px;
  border-radius: 10px;
`;

export const ContainerInfo = styled(View)`
  border-left-width: 2px;
  border-left-color: ${colors.primary};
  padding-left: 8px;
`;

export const City = styled(Text)`
  font-weight: bold;
  color: ${colors.reading};
`;

export const MoreInfo = styled(Text)`
  color: ${colors.reading};
`; 

export const ArrowButton = styled(BorderlessButton)``;