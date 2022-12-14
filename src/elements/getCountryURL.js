import { generateCountryURL } from './apiConnection';

const getCountryURL = async (code) => {
  const response = await fetch(generateCountryURL(code));
  const data = await response.json();
  return data[1];
};

export default getCountryURL;
