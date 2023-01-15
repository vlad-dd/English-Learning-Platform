import React from 'react';
import * as Redux from 'react-redux';
import { render, screen } from '@testing-library/react';
import store from '../../store';
import BreadCrumbPath from '.';
import ErrorBoundary from '../../ErrorBoundary';
import { BrowserRouter } from 'react-router-dom';
import { ThemeContext } from '../../Contexts';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn()
}))

const StoreProvider = ({ children }: any) => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Redux.Provider store={store}>
          <ThemeContext>{children}</ThemeContext>
        </Redux.Provider>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

describe('BreadCrumb', () => {
  const useSelectorMock = jest.spyOn(Redux, 'useSelector');

  beforeEach(() => {
    useSelectorMock.mockClear();
    useSelectorMock.mockReturnValue({ path: ['Present-Simple'] });
    render(
      <StoreProvider>
        <BreadCrumbPath mode="tenses" />
      </StoreProvider>
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
  
  it('should be in the document', () => {
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('should render path if exists', () => {
    expect(screen.getByText('Present-Simple')).toBeInTheDocument();
  })

});
