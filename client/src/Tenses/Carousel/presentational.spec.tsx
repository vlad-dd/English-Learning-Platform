import React from 'react';
import { render, screen } from '@testing-library/react';
import TensePractice from './presentational';
import { withApolloProvider, withIntlProvider, withReduxProvider, withRouterProvider } from '../../test-utils/hocs';

jest.mock('./components', () => () => <div>CarouselQuiz</div>);

const TensePracticeWithProvider = withRouterProvider(withApolloProvider(withReduxProvider(withIntlProvider(TensePractice))));

describe('TensePractice', () => {
  it('should render TensePractice', () => {
    render(<TensePracticeWithProvider />);
    expect(screen.getByTestId('title-component-id')).toBeInTheDocument();
    expect(screen.getByText('Practice')).toBeInTheDocument();
    expect(screen.getByText('CarouselQuiz')).toBeInTheDocument();
  });
});