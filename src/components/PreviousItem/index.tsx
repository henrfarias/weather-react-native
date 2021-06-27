import React from 'react';
import { useNavigation, NavigationProp } from '@react-navigation/native';
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
import { StackParamsList } from '../../types/StackParams';

type Props = NavigationProp<StackParamsList, 'Search'>;

const PreviousItem: React.FC<{ city: CityStore }> = ({ city }) => {
  const { city: currentCity, state, country, coords } = city;
  const navigation = useNavigation<Props>();

  return (
    <ContainerItem>
      <ContainerInfo>
        <City>{currentCity}</City>
        <MoreInfo>
          {state && `${state} ,`}
          {country}
        </MoreInfo>
      </ContainerInfo>
      <ArrowButton
        onPress={() => navigation.navigate('Weather', { coords: coords })}
      >
        <Ionicons name='arrow-forward' size={30} color={colors.primary} />
      </ArrowButton>
    </ContainerItem>
  );
};

export default PreviousItem;
