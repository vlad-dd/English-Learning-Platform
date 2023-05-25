import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import * as ReactRedux from 'react-redux';
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from 'react-dom/test-utils';
import ErrorBoundary from '../ErrorBoundary';
import store from '../store';
import { ThemeContext } from '../Contexts';
import SiderMenu from "./presentational";

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn()
}))

export const ApplicationProviders = ({ children }: { children: JSX.Element }) => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <ReactRedux.Provider store={store}>
          {children}
        </ReactRedux.Provider>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

describe('Options Menu', () => {
  const useDispatchSpy = jest.spyOn(ReactRedux, 'useDispatch');
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatchSpy.mockReturnValue(dispatch);
    render(<ApplicationProviders><SiderMenu /></ApplicationProviders>);
  })

  afterEach(() => useDispatchSpy.mockClear())

  it('should render options menu', () => {
    const options = ['Tenses', 'Grammar Levels', 'Dictionary', 'Releases'];
    expect(screen.getByTestId('options-menu')).toBeInTheDocument();
    options.forEach(option => expect(screen.getByText(option)).toBeInTheDocument());
  });

  it('should render present options menu', () => {
    const options = ['Simple', 'Continuous', 'Perfect', 'Perfect C'];
    expect(screen.getByTestId('options-menu')).toBeInTheDocument();
    act(() => fireEvent.click(screen.getByText('Tenses')))
    act(() => fireEvent.click(screen.getByText('Present')))
    options.forEach(option => expect(screen.getByText(option)).toBeInTheDocument());
  });

  it('should call dispatch 3 times after pressing on verb', () => {
    act(() => fireEvent.click(screen.getByText('Tenses')))
    act(() => fireEvent.click(screen.getByText('Present')))
    act(() => fireEvent.click(screen.getByText('Simple')))
    expect(screen.getByText('Simple')).toBeInTheDocument();
    expect(dispatch).toHaveBeenCalledTimes(3);
  });

})
