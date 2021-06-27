import React from 'react';
import { Text } from 'react-native';
import { CityStore } from '../../store/reducers/previousCitys.reducer';
import { ContainerSearches, Title, List } from './styles';

import PreviousItem from '../PreviousItem';


type PreviousListProps = {
  previousList: CityStore[];
};

const PreviousSearches: React.FC<PreviousListProps> = ({ previousList }) => {
  return (
    <ContainerSearches>
      <Title>Previous Searches</Title>
      {previousList.length ? (
        <List>
          {previousList.map((itemList) => {
            const { lat, lng } = itemList.coords;
            return <PreviousItem key={`${lat},${lng}`} city={itemList} />
          })}
        </List>
      ) : (
        <Text>Lista vazia.</Text>
      )}
    </ContainerSearches>
  );
};

export default PreviousSearches;
