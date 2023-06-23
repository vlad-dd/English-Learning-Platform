import React from 'react';
import { Space, Spin } from 'antd';
import { ILoadingSpinner } from './types';
import { LOADING_SPINNER_DATA_TEST_ID } from './constants';
import { SpinnerWrapper } from './styled';

const LoadingSpinner: React.FC<ILoadingSpinner> = ({ size }) => {
  return (
    <SpinnerWrapper data-testid={LOADING_SPINNER_DATA_TEST_ID}>
      <Space>
        <Spin size={size} />
      </Space>
    </SpinnerWrapper>
  );
};

export default LoadingSpinner;
