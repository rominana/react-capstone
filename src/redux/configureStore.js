import { configureStore, combineReducers } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import regionsReducer, { fetchRegions } from './regions/regions';
import countriesReducer from './countries/countries';

const rootReducer = combineReducers({
  regions: regionsReducer,
  countries: countriesReducer,

});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

store.dispatch(fetchRegions());

export default store;
