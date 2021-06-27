import React from 'react';
import { Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ContainerItem, ContainerInfo, City, MoreInfo, ArrowButton } from './styles';
import { ICity } from '../../types/ICity';
import { colors } from '../../utils/variables';

const PreviousItem: React.FC<{ city: ICity }> = ({ city }) => {
  return (
    <ContainerItem>
      <ContainerInfo>
        <City>{city.city}</City>
        <MoreInfo>
          {city.state}, {city.country}
        </MoreInfo>
      </ContainerInfo>
      <ArrowButton>
        <Ionicons 
          name='arrow-forward' 
          size={30}
          color={colors.primary}
        />
      </ArrowButton> 
    </ContainerItem>
  );
};

export default PreviousItem;
