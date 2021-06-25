import styled from 'styled-components/native';
import { Picker } from '@react-native-community/picker';

import { colors } from '../../utils/variables';
export const PickerContainer = styled.View`
  margin-top: 10px;
  margin-left: 10px;
  height: 50px;
  width: 100px;
  background-color: ${colors.gray};
  opacity: 0.7;
  border-radius: 10px;
`;

export const PickerStyled = styled(Picker)`
  color: ${colors.reading};
`;