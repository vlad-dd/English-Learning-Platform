import { ReactElement } from 'react';

interface IBreadCrumbProps {
    mode: string;
}

interface IProgressBarProps {
    type:  'circle' | 'line' | 'dashboard';
    width: number;
    percent: number
}
interface ICasesTabs {
    label: string;
    key: string;
    icon: ReactElement,
    titles: { description: string }[];
  }


export type { IBreadCrumbProps, IProgressBarProps, ICasesTabs };