import React from "react";
import { LogoWrapper, LogoTitle } from "../../styles";
import { Carousel } from "../../../../packages/components";
import { carouselElements } from "./carouselElements";

export const LogoBlock = () => (
  <LogoWrapper>
    <LogoTitle>DevCoach</LogoTitle>
    <Carousel
      elements={carouselElements}
      duration={5000}
      animation="fade left"
      showNextPrev={false}
      showIndicators={true}
    />
  </LogoWrapper>
);
