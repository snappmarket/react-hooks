/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const SpinnerIcon = ({ className, size }) => (
  <svg
    data-testid="SpinnerIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <path d="M12 2v-2c-1.619 0-3.191 0.319-4.672 0.944-1.428 0.603-2.712 1.469-3.813 2.572s-1.966 2.384-2.572 3.813c-0.625 1.481-0.944 3.053-0.944 4.672h2c0-5.512 4.488-10 10-10z"></path>
    <path d="M18.363 5.637c-1.697-1.7-3.959-2.637-6.363-2.637s-4.666 0.938-6.363 2.637-2.637 3.959-2.637 6.363 0.938 4.666 2.637 6.363c1.697 1.7 3.959 2.637 6.363 2.637s4.666-0.938 6.363-2.637c1.7-1.697 2.637-3.959 2.637-6.363s-0.938-4.666-2.637-6.363zM12 20c-4.413 0-8-3.588-8-8s3.588-8 8-8c4.413 0 8 3.588 8 8s-3.588 8-8 8z"></path>
  </svg>
);

SpinnerIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

SpinnerIcon.defaultProps = {
  size: 1.5,
};

export default SpinnerIcon;
