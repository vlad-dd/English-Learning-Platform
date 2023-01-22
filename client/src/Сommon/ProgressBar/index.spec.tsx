import React from 'react';
import { render, screen } from '@testing-library/react';
import ProgressBar from '.';
import { IProgressBarProps } from '../types';

describe('ProgressBar', () => {
    let props: IProgressBarProps;
    beforeEach(() => {
        props = {
            type: 'circle',
            width: 10,
            percent: 0
        }
    })

    it('should render progress bar', () => {
        render(<ProgressBar {...props}/>)
        expect(screen.getByRole('progressbar')).toBeInTheDocument();
    })

    it('should display given percent value', () => {
        const requiredProps = {
            ...props,
            percent: 65
        }
        render(<ProgressBar {...requiredProps} />)
        expect(screen.getByText('65%')).toBeInTheDocument();
    })

    it('should have 0% percent value if not passed', () => {
        render(<ProgressBar {...props} />)
        expect(screen.getByText('0%')).toBeInTheDocument();
    })
})