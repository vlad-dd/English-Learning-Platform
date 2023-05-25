import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Header from './presentational';
import ErrorBoundary from '../ErrorBoundary';
import store from '../store';
import { ThemeContext } from '../Contexts';
import * as Hook from './use-auth';

const ApplicationProviders = ({ children }: { children: JSX.Element }) => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Provider store={store}>
          {children}
        </Provider>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

describe('Header', () => {
  const useAuthMock = jest.spyOn(Hook, 'useAuthWidget');
  beforeEach(() => {
    useAuthMock.mockClear();
    useAuthMock.mockReturnValue({
      enteredUser: { email: 'test@gmail.com' }, 
      handleSignOut: jest.fn(),
      authError: null,
      setUser: jest.fn(),
      setAuthError: jest.fn()
    });
    render(<ApplicationProviders><Header /></ApplicationProviders>)
  })

  it('should render header component', () => {
    expect(screen.getByText('test@gmail.com')).toBeInTheDocument();
  });
});
