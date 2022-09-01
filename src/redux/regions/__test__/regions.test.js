import store from '../../configureStore';
// import { fetchRegions } from '../regions';
import { fetchRegions, fetchGDP } from '../regions';

describe('test reducers for region', () => {
  test('check store initial status', () => {
    expect(store.getState().regions.length).toBe(0);
  });

  test('fetch Regions', async () => {
    await store.dispatch(fetchRegions());
    expect(store.getState().regions).toBeTruthy();
  });

  test('fetch CountryGDP from Latin America & the Caribbean', async () => {
    await store.dispatch(fetchGDP('LCN'));
    const region = store.getState().regions.find((region) => region.code === 'LCN');
    expect(region).toBeTruthy();
    expect(region.gdp[0]).toBeTruthy();
  });
});
