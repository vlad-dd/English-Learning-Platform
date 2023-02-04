import React from 'react';
import { render, screen } from '@testing-library/react';
import MostCommonCases from './cases-tabs';

const caseMock =  {
    icon: 'mock.png',
    key: '1',
    label: 'MockLabel',
    titles: [{ description: 'MockDescription' }]
  }

describe('MostCommonCases', () => {
    const props = {
        tense: 'MockTense',
        cases: [caseMock]
    }

    it('should render MostCommonCases', () => {
        render(<MostCommonCases tense={props.tense} cases={props.cases} />)
        expect(screen.getByText('What cases tell us that it is MockTense?')).toBeInTheDocument();
        expect(screen.getByText('MockLabel')).toBeInTheDocument();
    });
})