const JSON_FORMAT = '?format=json';
const WB_URL = 'http://api.worldbank.org/v2/';
const WB_REGIONS = `http://api.worldbank.org/v2/region/${JSON_FORMAT}`;
const GDP_INDEX = 'NY.GDP.MKTP.CD';

const generateCountryURL = (countryCode) => (
  `${WB_URL}/country/${countryCode}/${JSON_FORMAT}`
);

const generateCountryGdpURL = (countryCode) => (
  `${WB_URL}/country/${countryCode}/indicator/${GDP_INDEX}${JSON_FORMAT}`
);

const generateCountriesURL = (regionCode) => (
  regionCode
    ? `${WB_URL}/country${JSON_FORMAT}&region=${regionCode}&per_page=300`
    : `${WB_URL}/country${JSON_FORMAT}&per_page=300`
);

export {
  WB_URL,
  WB_REGIONS,
  generateCountryGdpURL,
  generateCountryURL,
  generateCountriesURL,
};
