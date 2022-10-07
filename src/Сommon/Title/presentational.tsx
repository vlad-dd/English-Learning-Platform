import React from 'react';
import { TitleContainer } from './styled';

interface Props {
  children: React.ReactNode
}

const Title = ({ children }: Props) => {
  return (
    <React.Fragment>
        <TitleContainer>{children}</TitleContainer>
    </React.Fragment>
  )
}

export default Title;