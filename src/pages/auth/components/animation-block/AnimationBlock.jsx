import React from 'react';
import {
  AnimationWrapper,
  CircleSmall,
  CircleMedium,
  CircleLarge,
  CircleXLarge,
  CircleXXLarge,
  AnimationBlockWrapper,
} from '../../styles';
import {LogoBlock} from '../logo-block';

export const AnimationBlock = () => (
  <AnimationBlockWrapper>
    <AnimationWrapper>
      <CircleSmall/>
      <CircleMedium/>
      <CircleLarge/>
      <CircleXLarge/>
      <CircleXXLarge/>
    </AnimationWrapper>
  </AnimationBlockWrapper>
);
