import React, { memo } from 'react';
import { ScaleLoader } from 'react-spinners';

import { DefaultColors } from '../../../theme';

import { LoaderWrapper } from './styled';

export const Loader = memo(({ isLocal, ...rest }) => (
  <LoaderWrapper isLocal={isLocal}>
    <ScaleLoader color={DefaultColors.lightBlue} loading {...rest} />
  </LoaderWrapper>
));
