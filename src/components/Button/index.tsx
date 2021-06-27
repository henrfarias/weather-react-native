import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { ButtonStyled, Text } from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { ActivityIndicator } from 'react-native';
import { colors } from '../../utils/variables';

export type ButtonProps = RectButtonProps & {
  title?: string;
  icon?: React.FC<typeof MaterialCommunityIcons>;
  loading?: boolean; 
};

const Button: React.FC<ButtonProps> = ({ title, loading = false, children, ...props }) => {
  return (
    <ButtonStyled {...props}>
      {loading ? (
        <ActivityIndicator color={colors.gray} size='small' />
      ) : (
        <Text>{title || children}</Text>
      )}
    </ButtonStyled>
  );
};

export default Button;
