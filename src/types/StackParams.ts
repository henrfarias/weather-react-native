import { StackScreenProps } from '@react-navigation/stack'

export type StackParamsList = {
  Weather?: {};
  Search?: {
    coords: {
      lat: number;
      lng: number;
    }
  };
}

export type WeatherStackProps = StackScreenProps<StackParamsList, 'Weather'>;

export type SearchStackProps = StackScreenProps<StackParamsList, 'Search'>;