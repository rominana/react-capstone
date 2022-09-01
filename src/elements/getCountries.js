import { generateCountriesURL } from './apiConnection';

const getCountries = async (regionCode) => {
  const response = await fetch(generateCountriesURL(regionCode));
  const data = await response.json();
  const countries = data[1];
  return countries;
};

export default getCountries;
