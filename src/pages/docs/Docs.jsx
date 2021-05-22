import React from 'react';

import { LayoutWrapper } from '../../packages';
import { Text } from '../../styled';
import createLink from '../../../public/images/create-task.png';
import body from '../../../public/images/body.png';
import response from '../../../public/images/response.png';

import { ContentWrapper, Image, Wrapper } from './styled';

export const Docs = () => (
  <LayoutWrapper>
    <Wrapper>
      <ContentWrapper>
        <Text size="24px" weight={600}>
          Integration API
        </Text>
      </ContentWrapper>
      <ContentWrapper>
        <Text size="16px">
          You need to implement checking service for you practical tasks.
        </Text>
        <Text size="16px">
          For connection, you need to insert the link to your service in a
          special input field when you create the task(Name of the field - "Link
          to the verification module").
        </Text>
        <Image src={createLink} width="700px" />
        <Text size="16px">
          We will send http request(POST) to this url with body:
        </Text>
        <Image src={body} width="800px" />
        <Text size="16px">We will wait for response like this:</Text>
        <Image src={response} width="800px" />
      </ContentWrapper>
    </Wrapper>
  </LayoutWrapper>
);
