import React from 'react';
import { TextInputProps } from 'react-native';
import { TextInputStyled } from './styles';

import { colors } from '../../utils/variables';

const Input: React.FC<TextInputProps> = (props) => {
  return <TextInputStyled 
    {...props}
    placeholderTextColor={colors.reading}
  />
}

export default Input;