import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import * as Location from 'expo-location';
import { WEATHER_KEY, WEATHER_URL } from 'react-native-dotenv';
import IWeather from '../../types/IWeather';

import { colors } from '../../utils/variables';
import { TextStyle, View } from './styles';
import { StatusBar } from 'expo-status-bar';

import ContainerScreen from '../../components/ContainerScreen';
import UnitsPicker from '../../components/UnitsPicker';
import ReloadIcon from '../../components/ReloadIcon';
import WeatherInfo from '../../components/Weather/Info';
import WeatherDetails from '../../components/Weather/Details';
import { WeatherStackProps } from '../../types/StackParams';


const Weather: React.FC<WeatherStackProps> = ({ route }) => {
  const [currentWeather, setCurrentWeather] = useState<IWeather | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [unitSystem, setUnitSystem] = useState<string | number>('metric');

  useEffect(() => {
    loadApp();
  }, []);

  async function loadApp() {
    setCurrentWeather(null);
    setErrorMessage(null);
    try {
      if (!route.params) {
        setErrorMessage('Não foi possível ler as coordenadas.');
        return;
      }
      const { lat, lng } = route.params.coords;
      const weatherUrl = `${WEATHER_URL}?key=${WEATHER_KEY}&q=${lat},${lng}&lang=pt`;

      const response = await fetch(weatherUrl);
      const result = await response.json();

      if (!response.ok) {
        setErrorMessage(result.message);
        return;
      }
      setCurrentWeather(result);
    } catch (error) {
      setErrorMessage(error.message);
    }
  }
  if(currentWeather) {
    return (
      <ContainerScreen>
        <UnitsPicker
          unitSystem={unitSystem}
          onChangeUnitSystem={setUnitSystem}
        />
        <ReloadIcon load={loadApp}/>
        <WeatherInfo currentWeather={currentWeather} currentUnit={unitSystem} />
        <WeatherDetails currentWeather={currentWeather} currentUnit={unitSystem} />
        <StatusBar style='auto' />
      </ContainerScreen>
    );
  } else if (errorMessage) {
    return (
      <ContainerScreen>
        <ReloadIcon load={loadApp} />
        <TextStyle>{errorMessage}</TextStyle>
        <StatusBar style='auto' />
      </ContainerScreen>
    )
  } else {
    return (
      <ContainerScreen>
        <View>
          <ReloadIcon load={loadApp} />
          <ActivityIndicator size='large' color={colors.primary} />
          <StatusBar style='auto' />
        </View>
      </ContainerScreen>
    );
  }

};

export default Weather;