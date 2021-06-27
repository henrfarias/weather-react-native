import { configureStore } from '@reduxjs/toolkit';
import searchesReducer from './reducers/previousCitys.reducer';

const store = configureStore({
  reducer: {
    searches: searchesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
