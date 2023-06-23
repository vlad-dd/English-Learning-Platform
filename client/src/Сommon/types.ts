import { ReactElement } from 'react';
export interface IProgressBarProps {
    type: 'circle' | 'line' | 'dashboard';
    width: number;
    percent: number
};
export interface ICasesTabs {
    label: string;
    key: string;
    icon: ReactElement,
    titles: { description: string }[];
};
export interface ImageProps {
  id?: string
  url: string
  styles?: { [key: string]: string }
};
