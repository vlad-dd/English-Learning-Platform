import React from 'react';
import { render, screen } from '@testing-library/react';
import MostCommonCases from './cases-tabs';
import { withIntlProvider } from '../../test-utils/hocs';

const caseMock =  {
    icon: 'mock.png',
    key: '1',
    label: 'MockLabel',
    titles: [{ description: 'MockDescription' }]
  }

const MostCommonCasesWithProvider = withIntlProvider(MostCommonCases);

describe('MostCommonCases', () => {
    const props = {
        tense: 'MockTense',
        cases: [caseMock]
    };

    it('should render MostCommonCases', () => {
        render(<MostCommonCasesWithProvider tense={props.tense} cases={props.cases} />)
        expect(screen.getByText('What cases tell us that it is MockTense?')).toBeInTheDocument();
        expect(screen.getByText('MockLabel')).toBeInTheDocument();
    });
})