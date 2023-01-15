import React from 'react';
import { useSelector } from 'react-redux';
import { MODES } from './constants';
import { StyledBreadcrumb } from './styled';

import * as selectors from '../../store/selectors';
import { IBreadCrumbProps } from '../types';

const BreadCrumbPath: React.FC<IBreadCrumbProps> = ({ mode }) => {
  // const config = {
  //   //Add new mode here when needed
  //   [MODES.TENSES]: useSelector(selectors.tensesBCState)
  // };
  const { path } =  useSelector(selectors.tensesBCState)
  // const { path }: { path: string[] } = config[mode];
  return (
    <>
      <StyledBreadcrumb>
        {path?.map((item: string, index: number) => {
          return <StyledBreadcrumb.Item key={index}>{item}</StyledBreadcrumb.Item>;
        })}
      </StyledBreadcrumb>
    </>
  );
};

export default BreadCrumbPath;
