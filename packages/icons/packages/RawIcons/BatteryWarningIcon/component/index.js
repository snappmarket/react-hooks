/**
 * THIS IS AN AUTO GENERATED FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';

const BatteryWarningIcon = ({ className, size }) => (
  <svg
    data-testid="BatteryWarningIcon"
    viewBox="0 0 24 24"
    className={className}
    style={{
      width: size * 10,
      height: size * 10,
    }}
    focusable="false"
    fill="currentColor"
  >
    <path d="M22 9h-1v-1c0-1.103-0.897-2-2-2h-6.575l-0.584-1.169c-0.25-0.506-0.778-0.831-1.341-0.831s-1.091 0.325-1.341 0.828l-0.584 1.172h-6.575c-1.103 0-2 0.897-2 2v10c0 1.103 0.897 2 2 2h17c1.103 0 2-0.897 2-2v-1h1c1.103 0 2-0.897 2-2v-4c0-1.103-0.897-2-2-2zM10.053 5.275c0.081-0.166 0.256-0.275 0.447-0.275s0.363 0.109 0.447 0.278l4.003 8.003c0.034 0.066 0.050 0.141 0.050 0.219 0 0.275-0.225 0.5-0.5 0.5h-8c-0.275 0-0.5-0.225-0.5-0.5 0-0.078 0.019-0.153 0.050-0.219l4.003-8.006zM19 18h-17v-10h5.575l-2.412 4.828c-0.103 0.206-0.159 0.438-0.159 0.672 0 0.828 0.672 1.5 1.5 1.5h8c0.828 0 1.5-0.672 1.5-1.5 0-0.234-0.056-0.466-0.159-0.672l-2.419-4.828h5.575v10zM22 15h-1v-4h1v4z"></path>
    <path d="M10 12h1v1h-1v-1z"></path>
    <path d="M10 7h1v4h-1v-4z"></path>
  </svg>
);

BatteryWarningIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

BatteryWarningIcon.defaultProps = {
  size: 1.5,
};

export default BatteryWarningIcon;
