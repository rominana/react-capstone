import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Index from '../components/Index';

const Home = () => {
  const regions = useSelector((state) => state.regions);
  return (
    <ul>
      {regions.map((region) => (
        <li key={region.code} className="region">
          <span>{region.name}</span>
          {' '}
          <span>{region.code}</span>
          <span>GDP:</span>
          <Index regionCode={region.code} />
          <Link to={`/countries/${region.code}`}>{region.code}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Home;
