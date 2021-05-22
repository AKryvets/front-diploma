import styled from 'styled-components';

import { Container } from '../../styled';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  padding: 0px 20px;
`;

export const ToolbarWrapper = styled(Container)`
  display: flex;
  width: 100%;
  margin-bottom: 30px;
`;

export const FilterWrapper = styled.div`
  display: flex;
  margin-right: 20px;
  align-items: center;
`;

export const FiltersWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  min-height: 120px;
  min-width: 200px;
  justify-content: space-around;
`;

export const ContentWrapper = styled.div`
  width: 100%;
`;

export const ResultWrapper = styled(Container)`
  display: flex;
  width: 100%;
  flex-direction: column;
  cursor: pointer;
`;

export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 10px;
  justify-content: space-between;
`;

export const PracticalTaskInfo = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
  flex-direction: column;
`;
