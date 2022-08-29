import { WB_REGIONS } from './apiConnection';

const getRegions = async () => {
  const response = await fetch(WB_REGIONS);
  const unfilteredRegions = await response.json();
  const regions = unfilteredRegions[1].filter((region) => region.id);
  return regions;
};

export default getRegions;
