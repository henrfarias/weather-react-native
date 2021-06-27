import styled from 'styled-components/native';
import { TextInput } from 'react-native';
import { colors } from '../../utils/variables';

export const TextInputStyled = styled(TextInput)`
  height: 50px;
  width: 100%;
  border: 0.5px solid ${colors.gray};
  border-radius: 10px;
  padding: 0 8px;
  color: ${colors.reading};
  font-weight: bold;
`;