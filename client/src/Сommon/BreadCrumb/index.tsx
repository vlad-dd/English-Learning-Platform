import React from 'react';
import { useSelector } from 'react-redux';
import { compact } from 'lodash';
import * as selectors from '../../store/selectors/index'
import { StyledBreadcrumb } from './styled';

const BreadCrumbPath = () => {

  const { path }: { path: string[] } = useSelector(selectors.tensesBCState);

  const windowPath: Array<string> = window?.location?.pathname.split('/');
  
  return (
      <StyledBreadcrumb>
        {path.length !== 0 ? [...path].reverse()?.map((item: string, index: number) => {
          return <StyledBreadcrumb.Item key={index}>{item}</StyledBreadcrumb.Item>;
        }) : (
          compact(windowPath)?.map((item: string, index: number) => {
            return <StyledBreadcrumb.Item key={index}>{item}</StyledBreadcrumb.Item>;
          })
        )}
      </StyledBreadcrumb>
  );
};

export default BreadCrumbPath;
