import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';
import * as Location from 'expo-location';
import { API_KEY, BASE_URL } from 'react-native-dotenv';

import { colors } from '../../utils/variables';

const Weather: React.FC = () => {
  return (
    <View>
      <Text>Weather Screen</Text>
    </View>
  );
};

const View = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  color: ${colors.dark};
`;



export default Weather;