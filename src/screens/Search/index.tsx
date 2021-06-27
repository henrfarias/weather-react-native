import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import * as Location from 'expo-location';
import { Container, Label, ContainerButtons } from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { colors } from '../../utils/variables';
import ContainerScreen from '../../components/ContainerScreen';
import Input from '../../components/Input';
import Button from '../../components/Button';
import PreviousSearches from '../../components/PreviousSearches';

const DUMMY_DATA = [
  {
    city: 'Rio de Janeiro',
    state: 'RJ',
    country: 'Brazil',
  },
  {
    city: 'São Paulo',
    state: 'SP',
    country: 'Brazil',
  },
  {
    city: 'Porto Alegre',
    state: 'RS',
    country: 'Brazil',
  },
];

const Search: React.FC = () => {
  const [city, setCity] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  const getGeocode = async () => {
    setIsLoading(true);
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== 'granted') {
      alert('Permission to access location was denied');
      return;
    }

    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({
      accuracy: 4,
    });

    const geocode = await Location.reverseGeocodeAsync({ latitude, longitude });
    setIsLoading(false);
    if (!geocode[0].subregion) {
      alert('Não foi possível encontrar a cidade.');
      return;
    }
    setCity(geocode[0].subregion);
  };

  const getCoords = async () => {
    if (!city) {
      alert('Escolha a cidade primeiro.');
      return;
    }
    setIsFetching(true);
  };

  return (
    <ContainerScreen>
      <Container>
        <Label>Type your location here:</Label>
        <Input
          placeholder='Example: New York'
          textContentType='addressCity'
          onChangeText={setCity}
          value={city}
        ></Input>
        <ContainerButtons>
          <Button
            title='Submit'
            onPress={() => alert('Funcionou')}
            loading={isFetching}
          />
          <Button onPress={getGeocode} loading={isLoading}>
            <MaterialCommunityIcons
              name='crosshairs-gps'
              size={24}
              color={colors.gray}
            />
          </Button>
        </ContainerButtons>
        <PreviousSearches previousList={DUMMY_DATA} />
      </Container>
    </ContainerScreen>
  );
};

export default Search;
