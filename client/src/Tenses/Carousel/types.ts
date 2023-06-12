import React, { KeyboardEvent } from 'react';
import { IPracticeSentences } from '..';

interface IStatus {
    [key: string]: string
}

interface IAlerts {
    [key: string]: React.ReactNode
}

interface IPercentage {
    [key: string]: React.ReactNode
}

interface IUseAlertController {
    points: number, 
    sentences: IPracticeSentences[], 
    alert: string
}
interface ICarouselInput {
    borderColor: string
    showLastBanner: boolean,
    value: string,
    handleCheck: ({ key }: any, missedPart: string) => void,
    setValue: (inputValue: string) => void,
    currentItem: IPracticeSentences
}

export type { IStatus, IAlerts, IPercentage, IUseAlertController, ICarouselInput };