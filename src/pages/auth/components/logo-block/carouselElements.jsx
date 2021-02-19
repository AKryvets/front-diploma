import React from 'react';

import employeeDevelopment from '../../../../../public/images/employee-development-2.png';
import learningDevelopment from '../../../../../public/images/Learning-and-development.png';
import softwareDevelopment from '../../../../../public/images/software-development.png';
import { CarouselImg } from '../../styles';

export const carouselElements = [
  { render: () => <CarouselImg src={employeeDevelopment} /> },
  { render: () => <CarouselImg src={learningDevelopment} /> },
  { render: () => <CarouselImg src={softwareDevelopment} /> },
];
