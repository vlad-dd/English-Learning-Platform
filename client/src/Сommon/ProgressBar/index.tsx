import React from 'react';
import { Progress } from 'antd';
import { IProgressBarProps } from '../types';

const ProgressBar: React.FC<IProgressBarProps> = ({ type, width, percent }) => (
    <Progress
        type={type}
        width={width}
        percent={percent}
    />
);

export default ProgressBar;