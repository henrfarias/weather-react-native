import React from 'react';
import IWeather from '../../../types/IWeather';

import { colors } from '../../../utils/variables';
import {
  WeatherContainer,
  CityName,
  IconStatus,
  Temperature,
  ConditionStatus,
} from './styles';

const WeatherInfo: React.FC<{
  currentWeather: IWeather;
  currentUnit: string | number;
}> = ({ currentWeather, currentUnit }) => {
  const isMetric = currentUnit === 'metric';
  const {
    location: { name },
    current: {
      temp_c,
      temp_f,
      condition: { icon, text },
    },
  } = currentWeather;

  const temp = isMetric ? `${temp_c} C°` : `${temp_f} F°`;

  return (
    <WeatherContainer>
      <CityName>{name}</CityName>
      <IconStatus source={{ uri: `https://${icon}` }} />
      <Temperature>{temp}</Temperature>
      <ConditionStatus>{text}</ConditionStatus>
    </WeatherContainer>
  );
};

export default WeatherInfo;
