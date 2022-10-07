import React from 'react';
import { useSelector } from 'react-redux';
import { Breadcrumb } from 'antd';
import * as selectors from '../../selectors';

const BreadCrumb = () => {
  const { path }: { path: string[] } = useSelector(selectors.tensesBCState);
  return (
    <React.Fragment>
      <Breadcrumb style={{ margin: '16px 0' }}>
        {path?.map((item: string, index: number) => {
          return <Breadcrumb.Item key={index}>{item}</Breadcrumb.Item>;
        })}
      </Breadcrumb>
    </React.Fragment>
  );
};

export default BreadCrumb;
