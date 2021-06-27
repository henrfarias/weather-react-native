import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { colors } from '../../utils/variables';

export const ButtonStyled = styled(RectButton)`
  justify-content: center;
  align-items: center;
  width: 110px;
  height: 50px;
  border-radius: 10px;
  background-color: ${colors.primary};
`;

export const Text = styled.Text`
  color: ${colors.gray};
  font-size: 15px;
  font-weight: bold;
`;