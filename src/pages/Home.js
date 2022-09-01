import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Index from '../components/Index';
import WorldMaps from '../components/WorldMaps';

const Home = () => {
  const regions = useSelector((state) => state.regions);

  const hideMenu = () => {
    document.getElementById('menu').style.display = 'none';
  };

  return (
    <div className="container">
      <ul className="regions">
        {regions.map((region) => (
          <li key={`${region.code}-menu`} className="regionMenu">
            <Link to={`/countries/${region.code}`}>
              <div className="map">
                <WorldMaps region={region.code} />
              </div>
              <div className="regionInfo">
                <span className="regionTitle">{region.name}</span>
                <span>
                  <Index regionCode={region.code} />
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <ul id="menu">
        {regions.map((region) => (
          <li key={`${region.code}-menu`} className="region">
            <Link to={`/countries/${region.code}`} onClick={hideMenu}>
              {region.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
