import store from '../../configureStore';
import { fetchCountries, fetchCountryGDP } from '../countries';

describe('test reducers for Countries', () => {
  test('check store initial status', () => {
    expect(store.getState().countries.length).toBe(0);
  });

  test('fetch countries', async () => {
    await store.dispatch(fetchCountries());
    expect(store.getState().countries).toBeTruthy();
  });

  test('fetch CountryGDP from my country Paraguay', async () => {
    await store.dispatch(fetchCountryGDP('PRY'));
    const country = store.getState().countries.find((country) => country.id === 'PRY');
    expect(country).toBeTruthy();
    expect(country.gdp[0]).toBeTruthy();
  });
});
