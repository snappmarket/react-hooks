import * as React from 'react';
import PropTypes from 'prop-types';

const CircleIcon = ({ className, size, color }) => (
  <svg
    data-testid="CircleIcon"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill={color}
  >
    <title>circle</title>
    <path d="M32 16c0 8.837-7.163 16-16 16s-16-7.163-16-16c0-8.837 7.163-16 16-16s16 7.163 16 16z" />{' '}
  </svg>
);

CircleIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
};

CircleIcon.defaultProps = {
  size: 1.5,
  color: '#000000',
};

export default CircleIcon;
