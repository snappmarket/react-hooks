/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const LensIcon = ({ className, size }) => (
  <svg
    data-testid="LensIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"></path>
  </svg>
);

LensIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

LensIcon.defaultProps = {
  size: 1.5,
};

export default LensIcon;
