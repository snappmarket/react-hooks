/**
* THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
*/
import * as React from 'react';
import PropTypes from 'prop-types';

import './HappyEmoji.svg';

const HappyEmoji = ({ className, size }) => 
  <svg 
    viewBox="0 0 42.256 42.256"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    fill="currentColor">
    <use xlinkHref="#HappyEmoji" />
  </svg>;

HappyEmoji.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

HappyEmoji.defaultProps = {
  size: 1.5,
};

export default HappyEmoji;
