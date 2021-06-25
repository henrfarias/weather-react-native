import React from 'react';
import IWeather from '../../../types/IWeather';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

import {
  DetailsContainer,
  DetailsRow,
  DetailsBox,
  DetailsInfo,
  Title,
  DetailValue,
} from './styles';
import { colors } from '../../../utils/variables';

const WeatherDetails: React.FC<{
  currentWeather: IWeather;
  currentUnit: string | number;
}> = ({ currentWeather, currentUnit }) => {
  const {
    feelslike_c,
    feelslike_f,
    humidity,
    pressure_in,
    pressure_mb,
    wind_kph,
    wind_mph,
  } = currentWeather.current;

  const isMetric = currentUnit === 'metric';
  const feelslike = isMetric ? `${feelslike_c} C°` : `${feelslike_f} F°`;
  const pressure = isMetric ? `${pressure_mb} hPa` : `${pressure_in} in`;
  const windSpeed = isMetric ? `${wind_kph} km/h` : `${wind_mph} mph`;

  return (
    <DetailsContainer>
      <DetailsRow>
        <DetailsBox>
          <DetailsRow>
            <FontAwesome5
              name='temperature-low'
              size={25}
              color={colors.background2}
            />
            <DetailsInfo>
              <Title>Sensação Térmica:</Title>
              <DetailValue>{feelslike}</DetailValue>
            </DetailsInfo>
          </DetailsRow>
        </DetailsBox>
        <DetailsBox>
          <DetailsRow>
            <MaterialCommunityIcons
              name='water'
              size={30}
              color={colors.background2}
            />
            <DetailsInfo>
              <Title>Humidade:</Title>
              <DetailValue>{`${humidity} %`}</DetailValue>
            </DetailsInfo>
          </DetailsRow>
        </DetailsBox>
      </DetailsRow>
      <DetailsRow>
        <DetailsBox>
          <DetailsRow>
            <MaterialCommunityIcons
              name='weather-windy'
              size={25}
              color={colors.background2}
            />
            <DetailsInfo>
              <Title>Velocidade do vento:</Title>
              <DetailValue>{windSpeed}</DetailValue>
            </DetailsInfo>
          </DetailsRow>
        </DetailsBox>
        <DetailsBox>
          <DetailsRow>
            <MaterialCommunityIcons
              name='speedometer'
              size={25}
              color={colors.background2}
            />
            <DetailsInfo>
              <Title>Pressão:</Title>
              <DetailValue>{pressure}</DetailValue>
            </DetailsInfo>
          </DetailsRow>
        </DetailsBox>
      </DetailsRow>
    </DetailsContainer>
  );
};

export default WeatherDetails;