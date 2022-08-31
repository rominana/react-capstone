import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCountryGDP } from '../redux/countries/countries';
import { fetchGDP } from '../redux/regions/regions';
import currencyFormat from '../elements/currencyFormat';

const Index = (props) => {
  const { regionCode, countryCode } = props;
  const dispatch = useDispatch();
  if (regionCode) {
    const regions = useSelector((state) => state.regions);
    const region = regions.find((region) => region.code === regionCode);

    useEffect(() => {
      dispatch(fetchGDP(regionCode));
    }, []);

    return (
      <span>
        {'GDP: $US '}
        {region.gdp[0]?.value ? currencyFormat(region.gdp[0].value) : 'No Data'}
      </span>
    );
  }

  if (countryCode) {
    const countries = useSelector((state) => state.countries);
    const country = countries.find((country) => country.id === countryCode);

    useEffect(() => {
      dispatch(fetchCountryGDP(countryCode));
    }, []);

    return (
      <span>
        {'GDP: $US '}
        {country.gdp[0] !== 0 ? currencyFormat(country.gdp[0].value) : 'No Data available'}
      </span>
    );
  }

  return (
    <span>Incorrect! Try another country or continent</span>
  );
};

Index.propTypes = {
  regionCode: PropTypes.string,
  countryCode: PropTypes.string,
};

Index.defaultProps = {
  regionCode: '',
  countryCode: '',
};

export default Index;
