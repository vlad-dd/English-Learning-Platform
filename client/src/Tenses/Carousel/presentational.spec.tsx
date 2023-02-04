/* eslint-disable react/display-name */
import React from 'react';
import { render, screen } from '@testing-library/react';
import TensePractice from './presentational';
import ErrorBoundary from '../../ErrorBoundary';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store';
import { ThemeContext } from '../../Contexts';

jest.mock('./components', () => () => <div>CarouselQuiz</div>)

const ApplicationProviders = ({ children }: { children: JSX.Element }) => {
    return (
      <ErrorBoundary>
        <BrowserRouter>
          <Provider store={store}>
            <ThemeContext>{children}</ThemeContext>
          </Provider>
        </BrowserRouter>
      </ErrorBoundary>
    );
  };

describe('TensePractice', () => {
    it('should render TensePractice', () => {
        render(<ApplicationProviders><TensePractice /></ApplicationProviders>)
        expect(screen.getByTestId('title-component-id')).toBeInTheDocument();
        expect(screen.getByText('Practice')).toBeInTheDocument();
        expect(screen.getByText('CarouselQuiz')).toBeInTheDocument();
    });
});