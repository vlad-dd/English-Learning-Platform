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
    handleCheck: (event: KeyboardEvent<HTMLElement>, inputValue: string) => void,
    sentences: Array<IPracticeSentences>,
    actualSentenceIndex: number,
    value: string,
    setValue: (inputValue: string) => void
}

export type { IStatus, IAlerts, IPercentage, IUseAlertController, ICarouselInput };