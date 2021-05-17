import React from 'react';

import { Grid } from '../Grid/Grid';

import { DefaultColors } from '../../../theme';

import { ContentWrapper, GridWrapper, Wrapper } from './styled';
import { Sidebar } from './sidebar';

export const LayoutWrapper = ({ children }) => {
  const gridStyles = {
    width: 2000,
    height: 900 / 3,
  };

  return (
    <Wrapper>
      <Sidebar />
      <ContentWrapper>{children}</ContentWrapper>
      <GridWrapper>
        <Grid {...gridStyles} lineColor={DefaultColors.lightBlue} />
      </GridWrapper>
    </Wrapper>
  );
};
