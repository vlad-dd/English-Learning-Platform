import React from 'react';
import { render, screen } from '@testing-library/react';
import TensePractice from './presentational';
import { TenseApplicationProviders } from '../jest-utils';

jest.mock('./components', () => () => <div>CarouselQuiz</div>);

describe('TensePractice', () => {
  it('should render TensePractice', () => {
    render(
      <TenseApplicationProviders>
        <TensePractice />
      </TenseApplicationProviders>
    );
    expect(screen.getByTestId('title-component-id')).toBeInTheDocument();
    expect(screen.getByText('Practice')).toBeInTheDocument();
    expect(screen.getByText('CarouselQuiz')).toBeInTheDocument();
  });
});