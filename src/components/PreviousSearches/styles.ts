import styled from "styled-components/native";
import { View, ScrollView } from 'react-native';
import { colors } from "../../utils/variables";

export const ContainerSearches = styled(View)`
  margin-top: 16px;
`;

export const List = styled(ScrollView)`
  
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: ${colors.reading};
  margin-bottom: 8px;
`; 
