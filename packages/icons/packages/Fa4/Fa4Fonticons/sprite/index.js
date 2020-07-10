/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa4Fonticons.svg');
}

const Fa4Fonticons = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa4Fonticons"
      viewBox="0 0 1792 1792"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa4FonticonsHref"
        xlinkHref={`${importPrefix}#Fa4Fonticons`}
      />
    </svg>
  );
};

Fa4Fonticons.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa4Fonticons.defaultProps = {
  size: 1.5,
};

export default Fa4Fonticons;