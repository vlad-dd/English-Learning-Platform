import { compact } from 'lodash';
import React, { useEffect, useState } from 'react';
import * as selectors from '../../store/selectors/index'
import { useSelector } from 'react-redux';
import { StyledBreadcrumb } from './styled';

const BreadCrumbPath = () => {

  const { path }: { path: string[] } = useSelector(selectors.tensesBCState)

  const windowPath = window?.location?.pathname.split('/');
  
  return (
      <StyledBreadcrumb>
        {path.length !== 0 ? [...path].reverse()?.map((item: string, index: number) => {
          return <StyledBreadcrumb.Item key={index}>{item}</StyledBreadcrumb.Item>;
        }) : (
          compact(windowPath)?.map((item: any, index: any) => {
            return <StyledBreadcrumb.Item key={index}>{item}</StyledBreadcrumb.Item>;
          })
        )}
        {/* {compact(path)?.map((item: string, index: number) => {
          return <StyledBreadcrumb.Item key={index}>{item}</StyledBreadcrumb.Item>;
        })} */}
        {/* {[...path].reverse()?.map((item: string, index: number) => {
          return <StyledBreadcrumb.Item key={index}>{item}</StyledBreadcrumb.Item>;
        })} */}
      </StyledBreadcrumb>
  );
};

export default BreadCrumbPath;
