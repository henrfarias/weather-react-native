import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import {
  ContainerItem,
  ContainerInfo,
  City,
  MoreInfo,
  ArrowButton,
} from './styles';
import { colors } from '../../utils/variables';
import { CityStore } from '../../store/reducers/previousCitys.reducer';

const PreviousItem: React.FC<{ city: CityStore }> = ({ city }) => {
  const { city: currentCity, state, country } = city;

  return (
    <ContainerItem>
      <ContainerInfo>
        <City>{currentCity}</City>
        <MoreInfo>
          {state && `${state} ,`}{country}
        </MoreInfo>
      </ContainerInfo>
      <ArrowButton>
        <Ionicons name='arrow-forward' size={30} color={colors.primary} />
      </ArrowButton>
    </ContainerItem>
  );
};

export default PreviousItem;
