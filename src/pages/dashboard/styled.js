import styled from 'styled-components';

import Button from '@xcritical/button';

import { Container } from '../../styled';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
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

export const StatusPanel = styled.div`
  display: flex;
  width: 100%;
`;

export const StatusBlock = styled(Container)`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  margin-bottom: 0;
`;

export const StatusBlockWrapper = styled(Container)`
  width: 200px;
  border-radius: 10px;
  margin-right: 30px;
`;

export const ToolbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

export const CreateButton = styled(Button)`
  padding: 27px;
  font-size: 18px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 10px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
`;
