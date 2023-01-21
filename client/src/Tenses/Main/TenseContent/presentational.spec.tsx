/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeContext } from '../../../Contexts';
import ErrorBoundary from '../../../ErrorBoundary';
import store from '../../../store';
import TenseContent from './presentational';
import * as Configutation from './use-tense-configuration';

jest.mock('./use-tense-configuration')

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

describe('TenseContent', () => {
  const useTenseMock = jest.spyOn(Configutation, 'useTenseConfiguration')
  beforeEach(() => {
    useTenseMock.mockClear();
    // useTenseMock.mockReturnValue({ data: {countOfTenses: [{tense: 'testIfItWorks'}]}, loading: false, error: false })

  })

  it('first', () => {
    render(<ApplicationProviders><TenseContent /></ApplicationProviders>)
    expect(screen.getByText('sadf')).toBeInTheDocument();
});

})