import { createSlice } from '@reduxjs/toolkit';
import { ICity } from '../../types/ICity';

let initialState: CityStore[] = [];

type Props = {
  payload: ICity;
}

export type CityStore = {
  city: string;
  state: string;
  country: string;
  coords: {
    lat: number;
    lng: number;
  }

}

const SearchesSlice = createSlice({
  name: 'searches',
  initialState,
  reducers: {
    citySearched: (state, action: Props) =>  {
      const { results } = action.payload;
      const { components, geometry } = results[0];
      let city: CityStore = {
        city: components.city,
        state: components.state_code,
        country: components.country,
        coords: {
          lat: geometry.lat,
          lng: geometry.lng
        }
      }

      if (state.length < 3) {
        state.push(city);
      } else if (state.length === 3) {
        state.shift();
        state.push(city);
      }
    }
  }
});

export const { citySearched } = SearchesSlice.actions;

export default SearchesSlice.reducer;