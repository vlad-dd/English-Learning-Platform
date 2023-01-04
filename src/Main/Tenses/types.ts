import {
  CheckOutlined,
  CloseOutlined,
} from '@ant-design/icons';
import { BsQuestionCircle } from 'react-icons/bs';
import { IBFFResponse } from '../types';

interface IPanelProps {
  header: string;
  translationData: string;
  Icon: typeof CheckOutlined | typeof CloseOutlined | typeof BsQuestionCircle;
  key: number;
}

interface IResponse {
  configuration: IBFFResponse[];
}

export type { IPanelProps, IResponse }; 
