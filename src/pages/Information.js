import React from 'react';
import PropTypes from 'prop-types';

const Information = (props) => {
  const { country } = props;
  return (
    <div>
      {country}
    </div>
  );
};

Information.propTypes = {
  country: PropTypes.string.isRequired,
};

export default Information;
