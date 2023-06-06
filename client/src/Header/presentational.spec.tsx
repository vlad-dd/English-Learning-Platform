import { render, screen } from '@testing-library/react';
import Header from './presentational';
import * as Hook from './use-auth';
import { withReduxProvider, withRouterProvider } from '../test-utils/hocs';

const HeaderWithProvider = withRouterProvider(withReduxProvider(Header));

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
    render(<HeaderWithProvider />)
  });

  it('should render header component', () => {
    expect(screen.getByText('test@gmail.com')).toBeInTheDocument();
  });
});
