import { useCallback } from 'react';
import { size } from 'lodash';
import { Alert } from 'antd';
import { ProgressBar } from '../../../../Сommon';
import { IAlerts, IPercentage, IUseAlertController } from '../../../types';
import { ALERT_MESSAGES, ALERT_STATUS } from '../../../constants';
import { StyledPercentage } from '../../styled';

export const useAlertController = ({ points, sentences, alert }: IUseAlertController) => {

  const CalculatedProgress = useCallback(() => (
    <ProgressBar
      width={80}
      type='circle'
      percent={alert === ALERT_STATUS.LAST ? 100 : Math.round((points * 100) / size(sentences))}
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
        message={ALERT_MESSAGES.CORRECT}
        type='success'
        description={PERCENTAGES[alert]}
        showIcon
        action={<CalculatedProgress />}
      />
    ),
    UNCORRECT: (
      <Alert
        message={ALERT_MESSAGES.UNCORRECT}
        description={PERCENTAGES[alert]}
        type='error'
        showIcon
        action={<CalculatedProgress />}
      />
    ),
    LAST: (
      <Alert
        message={ALERT_MESSAGES.LAST}
        description={PERCENTAGES[alert]}
        type='success'
        showIcon
        action={<CalculatedProgress />}
      />
    ),
  };

  return ALERTS[alert];
};