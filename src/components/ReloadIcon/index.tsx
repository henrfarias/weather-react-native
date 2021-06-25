import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { colors } from '../../utils/variables';
import { ReloadContainer } from './styles';

const ReloadIcon: React.FC<{ load: () => void }> = ({ load }) => {
  const reloadIconName = Platform.OS === 'ios' ? 'ios-refresh' : 'md-refresh';
  return (
    <ReloadContainer>
      <Ionicons
        onPress={load}
        name={reloadIconName}
        size={24}
        color={colors.reading}
      />
    </ReloadContainer>
  );
};


export default ReloadIcon;