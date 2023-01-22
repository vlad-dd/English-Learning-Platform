import { compact } from 'lodash';
import React from 'react';
import { StyledBreadcrumb } from './styled';

const BreadCrumbPath = () => {

  const path = window?.location?.pathname.split('/');

  return (
      <StyledBreadcrumb>
        {compact(path)?.map((item: string, index: number) => {
          return <StyledBreadcrumb.Item key={index}>{item}</StyledBreadcrumb.Item>;
        })}
      </StyledBreadcrumb>
  );
};

export default BreadCrumbPath;
