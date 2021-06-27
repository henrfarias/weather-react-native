import React, { useState } from 'react';
import * as Location from 'expo-location';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Container, Label, ContainerButtons } from './styles';
import { OPENCAGEDATA_URL, OPENCAGEDATA_KEY } from 'react-native-dotenv';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { citySearched } from '../../store/reducers/previousCitys.reducer';
import { ICity } from '../../types/ICity';
import { SearchStackProps } from '../../types/StackParams';

import { colors } from '../../utils/variables';
import ContainerScreen from '../../components/ContainerScreen';
import Input from '../../components/Input';
import Button from '../../components/Button';
import PreviousSearches from '../../components/PreviousSearches';

const Search: React.FC<SearchStackProps> = ({ navigation }) => {
  const [city, setCity] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const historyCitySearches = useAppSelector((state) => state.searches) 
  const dispatch = useAppDispatch();

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
    const data: ICity = await fetchOpenCageData();
    dispatch(citySearched(data));
    setIsFetching(false);
    // navigation.push('Weather', { coords: data.results[0].geometry});
  };

  const fetchOpenCageData = async () => {
    const response = await fetch(
      `${OPENCAGEDATA_URL}?key=${OPENCAGEDATA_KEY}&q=${city}`
    );
    const data = await response.json();
    return data;
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
          <Button title='Submit' onPress={getCoords} loading={isFetching} />
          <Button onPress={getGeocode} loading={isLoading}>
            <MaterialCommunityIcons
              name='crosshairs-gps'
              size={24}
              color={colors.gray}
            />
          </Button>
        </ContainerButtons>
        <PreviousSearches previousList={historyCitySearches} />
      </Container>
    </ContainerScreen>
  );
};

export default Search;
