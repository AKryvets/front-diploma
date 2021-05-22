import EyeOutlineIcon from 'mdi-react/EyeOutlineIcon';
import React, { useCallback, useState } from 'react';

import { Text } from '../../styled';
import { Overlay } from '../tasks/components/view/styled';

import { InfoWrapper, ResultWrapper, TitleWrapper } from './styled';

export const TaskResult = ({ result, onResultPreview }) => {
  const [isOverlay, setIsOverlay] = useState();

  const showOverlay = useCallback(() => {
    setIsOverlay(true);
  }, [setIsOverlay]);

  const hideOverlay = useCallback(() => {
    setIsOverlay(false);
  }, [setIsOverlay]);

  return (
    <ResultWrapper onMouseLeave={hideOverlay} onMouseEnter={showOverlay}>
      {isOverlay ? (
        <Overlay onClick={onResultPreview}>
          <EyeOutlineIcon size={50} />
          <Text size="18px">Preview</Text>
        </Overlay>
      ) : null}
      <TitleWrapper>
        <Text size="18px">{result.title}</Text>
        <Text size="18px">{`${result.mark}/${result.maxMark}`}</Text>
      </TitleWrapper>
      <InfoWrapper>
        <Text>{`Spent time: ${result.workTime}`}</Text>
        <Text>{result.resultDate}</Text>
      </InfoWrapper>
    </ResultWrapper>
  );
};
