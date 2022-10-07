import React from 'react';
import { Wrapper } from './styled';

type Props = {
  children: React.ReactNode
}

const Link: React.FC<Props> = ({ children }) => {
  return (
    <React.Fragment>
     <Wrapper>
     {children}
     </Wrapper>
    </React.Fragment>
  );
};

export default Link;