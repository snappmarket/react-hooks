import * as React from 'react';
import PropTypes from 'prop-types';

const ClockOutlineIcon = ({ className, size, color }) => (
  <svg
    data-testid="ClockOutlineIcon"
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
    <title>clock-o</title>
    <path d="M15.992 30.766c-0.001 0-0.002 0-0.004 0-8.207 0-14.86-6.653-14.86-14.86s6.653-14.86 14.86-14.86c8.207 0 14.86 6.653 14.86 14.86v0c-0.009 8.202-6.654 14.848-14.855 14.86h-0.001zM15.992 3.095c-0.001 0-0.002 0-0.004 0-7.076 0-12.812 5.736-12.812 12.812s5.736 12.812 12.812 12.812c7.076 0 12.812-5.736 12.812-12.812v0c-0.008-7.071-5.737-12.801-12.807-12.812h-0.001zM25.307 18.048h-10.004c-0.566 0-1.024-0.458-1.024-1.024v0-10.418c0-0.566 0.458-1.024 1.024-1.024s1.024 0.458 1.024 1.024v0 9.394h8.98c0.566 0 1.024 0.458 1.024 1.024s-0.458 1.024-1.024 1.024v0z" />{' '}
  </svg>
);

ClockOutlineIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
};

ClockOutlineIcon.defaultProps = {
  size: 1.5,
  color: '#000000',
};

export default ClockOutlineIcon;
