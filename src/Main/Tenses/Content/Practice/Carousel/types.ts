import React from 'react';
import { IPracticeSentence } from '../../../..';

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
    sentences: IPracticeSentence[], 
    alert: string
}

export type { IStatus, IAlerts, IPercentage, IUseAlertController };