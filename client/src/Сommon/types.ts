import { ReactElement } from 'react';
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
interface ImageProps {
  id?: string
  url: string
  styles?: { [key: string]: string }
}


export type { IProgressBarProps, ICasesTabs, ImageProps };