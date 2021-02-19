import React from 'react';

import {
  AnimationBlockWrapper,
  AnimationWrapper,
  CircleLarge,
  CircleMedium,
  CircleSmall,
  CircleXLarge,
  CircleXXLarge,
} from '../../styles';

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
