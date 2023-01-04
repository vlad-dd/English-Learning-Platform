import React from 'react';
import { Space, Spin } from 'antd';
import { SpinnerWrapper } from './styled';

interface ILoadingSpinner {
  size: 'small' | 'default' | 'large';
}

const LoadingSpinner: React.FC<ILoadingSpinner> = ({ size }) => {
  return (
    <SpinnerWrapper>
      <Space>
        <Spin size={size} />
      </Space>
    </SpinnerWrapper>
  );
};

export default LoadingSpinner;
