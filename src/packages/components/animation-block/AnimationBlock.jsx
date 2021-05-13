import React from 'react';

import {
  AnimationBlockWrapper,
  AnimationWrapper,
  CircleLarge,
  CircleMedium,
  CircleSmall,
  CircleXLarge,
  CircleXXLarge,
} from './styled';

import './style.css';

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
