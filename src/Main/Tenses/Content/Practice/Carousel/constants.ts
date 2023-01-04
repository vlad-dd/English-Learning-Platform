import { IStatus } from './types';

const STATUS: IStatus = {
  CORRECT: '1px solid green',
  UNCORRECT: '1px solid red',
  DEFAULT: '1px solid gainsboro',
};

const ALERT_STATUS = {
  CORRECT: 'CORRECT',
  UNCORRECT: 'UNCORRECT',
  LAST: 'LAST',
};

export { STATUS, ALERT_STATUS };
