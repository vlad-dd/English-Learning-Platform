import React, { useCallback } from 'react';
import { ALERT_STATUS } from './constants';
import { size } from 'lodash';
import { StyledPercentage } from './styled';
import { Alert } from 'antd';
import { ProgressBar } from '../../../Сommon';
import { IAlerts, IPercentage, IUseAlertController } from './types';

export const useAlertController = ({ points, sentences, alert }: IUseAlertController) => {
  
    const CalculatedProgress = useCallback(() => (
      <ProgressBar
        width={80}
        type='circle'
        percent={alert === 'LAST' ? 100 : (points * 100) / size(sentences)}
      />
    ), [alert, points, sentences]);

    const PERCENTAGES: IPercentage = {
        [ALERT_STATUS.CORRECT]: (
          <StyledPercentage>
            Points: {points}/{size(sentences)}
          </StyledPercentage>
        ),
        [ALERT_STATUS.UNCORRECT]: (
          <StyledPercentage>
            Points: {points}/{size(sentences)}
          </StyledPercentage>
        ),
        [ALERT_STATUS.LAST]: (
          <StyledPercentage>
            Points: {points + 1}/{size(sentences)}
          </StyledPercentage>
        ),
      };

      const ALERTS: IAlerts = {
        CORRECT: (
          <Alert
            message='Correct answer!'
            type='success'
            description={PERCENTAGES[alert]}
            showIcon
            action={<CalculatedProgress />}
          />
        ),
        UNCORRECT: (
          <Alert
            message='Wrong answer, try again!'
            description={PERCENTAGES[alert]}
            type='error'
            showIcon
            action={<CalculatedProgress />}
          />
        ),
        LAST: (
          <Alert
            message='Correct, you have passed an assignment🎉!'
            description={PERCENTAGES[alert]}
            type='success'
            showIcon
            action={<CalculatedProgress />}
          />
        ),
      };

  return ALERTS[alert];
};