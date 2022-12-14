import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdArrowBackIosNew, MdClose, MdSearch } from 'react-icons/md';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [search, setSearch] = useState('');
  const countries = useSelector((state) => state.countries);
  const regions = useSelector((state) => state.regions);
  const { pathname } = useLocation();
  const pathElements = pathname.split('/');
  const title = pathElements[1] || 'World Bank GDP data per region';
  const aviableCountry = countries.find((country) => country.id === pathElements[2]);
  const aviableRegion = regions.find((region) => region.code === pathElements[2]);
  const detail = aviableRegion?.name || aviableCountry?.name;
  let link = '/';

  if (title === 'countries') {
    link = '/';
  }
  if (title === 'details') {
    link = `/countries/${aviableCountry.region.id}`;
  }
  const handleClickMenu = () => {
    const { display } = document.getElementById('menu').style;
    if (display === 'block') {
      document.getElementById('menu').style.display = 'none';
    } else {
      document.getElementById('menu').style.display = 'block';
    }
    const { children } = document.getElementById('menuLink');
    [...children].forEach((child) => child.classList.toggle('activeIcon'));
  };

  const handleClickSearch = () => {
    document.getElementById('searchInput').classList.toggle('activeSearch');
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <header>
      <div className="menuIcon">
        {
        pathname !== '/'
          ? (
            <Link to={link} id="backLink">
              <MdArrowBackIosNew />
            </Link>
          )
          : (
            <button type="button" id="menuLink" onClick={handleClickMenu}>
              <GiHamburgerMenu className="activeIcon" />
              <MdClose />
            </button>
          )
        }
      </div>
      <div className="navTitle">
        {`${title}`}
        {detail ? ` - ${detail}` : ''}
      </div>
      <div className="searchBar">
        {title === 'countries'
          ? (
            <>
              <button type="button" onClick={handleClickSearch}>
                <MdSearch />
              </button>
              <input name="search" id="searchInput" placeholder="search this region" onChange={handleChange} value={search} />
            </>
          )
          : ''}
      </div>
    </header>
  );
};

export default Navbar;
