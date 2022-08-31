import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Index from '../components/Index';

const Countries = () => {
  const { regionCode } = useParams();
  const countries = useSelector((state) => state.countries)
    .filter((country) => regionCode === country.region.id);
  return (
    <ul className="countries">
      {countries.map((country) => (
        <li key={country.id} className="country">
          <Link to={`/details/${country.id}`}>
            <div className="countryInfo">
              <span className="countryTitle">{country.name}</span>
              <span>
                <Index countryCode={country.id} />
              </span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Countries;
