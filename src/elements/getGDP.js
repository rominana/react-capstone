import { generateCountryGdpURL } from './apiConnection';

const getGDP = async (code) => {
  const response = await fetch(generateCountryGdpURL(code));
  const data = await response.json();
  return data[1];
};

export default getGDP;
