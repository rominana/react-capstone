import { WB_REGIONS } from './apiConnection';

const getElementFromAPI = async () => {
  const response = await fetch(WB_REGIONS);
  const unfilteredRegions = await response.json();
  const regions = unfilteredRegions[1];
  return regions;
};

export default getElementFromAPI;
