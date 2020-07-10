/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./SignalCellularConnectedNoInternet4BarOutlined.svg');
}

const SignalCellularConnectedNoInternet4BarOutlined = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="SignalCellularConnectedNoInternet4BarOutlined"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="SignalCellularConnectedNoInternet4BarOutlinedHref"
        xlinkHref={`${importPrefix}#SignalCellularConnectedNoInternet4BarOutlined`}
      />
    </svg>
  );
};

SignalCellularConnectedNoInternet4BarOutlined.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

SignalCellularConnectedNoInternet4BarOutlined.defaultProps = {
  size: 1.5,
};

export default SignalCellularConnectedNoInternet4BarOutlined;