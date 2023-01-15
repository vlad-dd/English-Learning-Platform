import React from 'react';
import { TitleContainer } from './styled';

interface IProps {
  children: React.ReactNode,
}

const Title: React.FC<IProps> = ({ children }) => {
  return (
    <React.Fragment>
        <TitleContainer style={{paddingTop: '25px'}}>{children}</TitleContainer>
    </React.Fragment>
  );
};

export default Title;