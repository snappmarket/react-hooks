/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const DoubleArrow = ({ className, size }) => (
  <svg
    data-testid="DoubleArrow"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <React.Fragment>
      <path d="M15.5 5H11l5 7-5 7h4.5l5-7z"></path>
      <path d="M8.5 5H4l5 7-5 7h4.5l5-7z"></path>
    </React.Fragment>
    , 'DoubleArrow',
  </svg>
);

DoubleArrow.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

DoubleArrow.defaultProps = {
  size: 1.5,
};

export default DoubleArrow;