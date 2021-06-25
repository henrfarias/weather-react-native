import styled from 'styled-components/native';
import { colors } from '../../../utils/variables';

export const WeatherContainer = styled.View`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 12px;
`;

export const CityName = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${colors.reading}
`; 

export const IconStatus = styled.Image`
  width: 64px;
  height: 64px;
`;

export const Temperature = styled.Text`
  font-size: 50px;
  color: ${colors.primary};
`;

export const ConditionStatus = styled.Text`
  font-size: 20px;
  color: ${colors.reading}
`;