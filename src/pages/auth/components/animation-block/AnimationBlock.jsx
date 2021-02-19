import React from 'react';

import { AnimationBlockWrapper } from '../../styled';

import {
  AnimationWrapper,
  CircleLarge,
  CircleMedium,
  CircleSmall,
  CircleXLarge,
  CircleXXLarge,
} from './styled';

export const AnimationBlock = () => (
  <AnimationBlockWrapper>
    <AnimationWrapper>
      <CircleSmall />
      <CircleMedium />
      <CircleLarge />
      <CircleXLarge />
      <CircleXXLarge />
    </AnimationWrapper>
  </AnimationBlockWrapper>
);
