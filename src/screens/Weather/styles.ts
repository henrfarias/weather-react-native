import styled from 'styled-components/native';
import { LinearGradient }  from 'expo-linear-gradient';
import { colors } from '../../utils/variables';

export const Container = styled(LinearGradient)`
  flex: 1;
`;

export const Text = styled.Text`
  color: ${colors.reading};
`

export const TextStyle = styled.Text`
  color: ${colors.primary};
`;

export const View = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`; 