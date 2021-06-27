import React from 'react';
import { Text } from 'react-native';
import { ICity } from '../../types/ICity'; 
import { ContainerSearches, Title, List } from './styles';

import PreviousItem from '../PreviousItem';


type PreviousListProps = {
  previousList: ICity[];
};

const PreviousSearches: React.FC<PreviousListProps> = ({ previousList }) => {
  return (
    <ContainerSearches>
      <Title>Previous Searches</Title>
      {previousList.length ? (
        <List>
          {previousList.map((itemList) => {
            return <PreviousItem key={itemList.city} city={itemList} />
          })}
        </List>
      ) : (
        <Text>Lista vazia.</Text>
      )}
    </ContainerSearches>
  );
};

export default PreviousSearches;
