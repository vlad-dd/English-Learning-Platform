import React from 'react';
import { render, screen } from '@testing-library/react'
import WelcomePage from './presentational';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import ErrorBoundary from '../ErrorBoundary';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';

const client = new ApolloClient({
    uri: "http://localhost:4000",
    cache: new InMemoryCache(),
  });
  
  const TenseApplicationProviders = ({ children, ownContextProps }: { children: JSX.Element, ownContextProps?: any }) => {
    return (
      <ErrorBoundary>
        <BrowserRouter>
          <ApolloProvider client={client}>
            <Provider store={store}>
                {children}
            </Provider>
          </ApolloProvider>
        </BrowserRouter>
      </ErrorBoundary>
    );
  };

it('should render Default Page', () => {
    render(<TenseApplicationProviders><WelcomePage /></TenseApplicationProviders>)
    expect(screen.getByTestId('welcome-page-section')).toBeInTheDocument();
})