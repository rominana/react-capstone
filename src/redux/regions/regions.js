import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import getRegions from '../../elements/getRegions';
import getGDP from '../../elements/getGDP';

const REGIONS = 'react-capstone/regions';
const GET_REGIONS = `${REGIONS}/GET_REGIONS`;
const GET_GDP = `${REGIONS}/GET_GDP`;
const initialState = [];

const fetchRegions = createAsyncThunk(
  GET_REGIONS,
  async () => {
    const response = await getRegions();
    return response;
  },
);

const fetchGDP = createAsyncThunk(
  GET_GDP,
  async (code) => {
    const response = await getGDP(code);
    return response;
  },
);

const regionsSlice = createSlice({
  name: 'regions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRegions.fulfilled, (state, action) => (
      action.payload.map((region) => ({
        ...region,
        gdp: [0],
        gdpStatus: 'idle',
      }))
    ));
    builder.addCase(fetchGDP.fulfilled, (state, action) => {
      if (action.payload) {
        const gdpValues = action.payload;
        const code = gdpValues[0].countryiso3code;
        return state.map((region) => {
          if (region.code === code) {
            const newRegion = {
              ...region,
              gdp: gdpValues,
              gdpStatus: 'idle',
            };
            return newRegion;
          }
          return region;
        });
      }
      return state;
    });
  },
});

export default regionsSlice.reducer;
export { fetchRegions, fetchGDP };
