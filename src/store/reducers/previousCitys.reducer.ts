import { createSlice } from '@reduxjs/toolkit';
import { ICity } from '../../types/ICity';

let initialState: CityStore[] = [];

type Props = {
  payload: ICity;
};

export type CityStore = {
  city: string;
  state: string;
  country: string;
  coords: {
    lat: number;
    lng: number;
  };
};

const SearchesSlice = createSlice({
  name: 'searches',
  initialState,
  reducers: {
    citySearched: (state, action: Props) => {
      const { results } = action.payload;
      const city: CityStore = {
        city: '',
        state: '',
        country: '',
        coords: {
          lat: 0,
          lng: 0,
        },
      };

      for (let i = 0; i <= results.length; i++) {
        if (results[i].components._type === 'city') {
          const { components, geometry } = results[i];
          city.state = components.state_code;
          (city.country = components.country),
            (city.coords.lat = geometry.lat),
            (city.coords.lng = geometry.lng);
        }
        if (results[i].components.city) {
          city.city = results[i].components.city!;
          break;
        } else if (results[i].components.town) {
          city.city = results[i].components.town!;
          break;
        }
      }

      const alreadyExists = state.findIndex(
        (locale) => locale.city === city.city
      );

      if (state.length < 3 && alreadyExists === -1) {
        state.unshift(city);
      } else if (state.length === 3 && alreadyExists === -1) {
        state.pop();
        state.unshift(city);
      } else if (alreadyExists !== -1)  {
        state.splice(alreadyExists, 1);
        state.unshift(city);
      }
    },
  },
});

export const { citySearched } = SearchesSlice.actions;

export default SearchesSlice.reducer;
