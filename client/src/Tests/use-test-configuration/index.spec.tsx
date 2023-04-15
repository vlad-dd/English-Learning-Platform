import React from 'react';
import { store } from '../../store/index';
import { Provider } from 'react-redux';
import { renderHook, waitFor } from "@testing-library/react";
import { useTestConfigurationWidget } from ".";
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { MockedProvider } from '@apollo/client/testing';
import { GET_TEST_CONFIGURATION } from '../graphql';

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useSelector: () => ({ path: ['mock theme', 'mock part']})
}))

const TestContextResponse = {
    data: {
        getTests: [{
            __typename: 'typename',
            type: 'Mocked Type',
            config: [{
                __typename: 'config typename',
                label: 'Mocked Label',
                correctAnswer: 'Mocked Correct Answer'
            }]
        }]
    },
    isLoading: false,
    error: undefined
}

const mocks = [
    {
        request: {
            query: GET_TEST_CONFIGURATION,
            variables: {
                part: "mock part",
                theme: 'mock theme'
            },
        },
        result: TestContextResponse,
    },
];

const client = new ApolloClient({
    uri: "http://localhost:4000",
    cache: new InMemoryCache(),
});

const ApplicationProviders = ({ children }: { children: JSX.Element }) => {
    return (
        <ApolloProvider client={client}>
            <MockedProvider mocks={mocks}>
                <Provider store={store}>
                    {children}
                </Provider>
            </MockedProvider>
        </ApolloProvider>
    )

}

describe('useTestConfigurationWidget', () => {
    it('should return config', async () => {
        const { result } = renderHook(() => useTestConfigurationWidget(), { wrapper: ApplicationProviders });
        await waitFor(() => {
            expect(result.current.data.getTests[0].__typename).toBe('typename');
            expect(result.current.data.getTests[0].type).toBe('Mocked Type');
            expect(result.current.data.getTests[0].config[0].__typename).toBe('config typename');
            expect(result.current.data.getTests[0].config[0].label).toBe('Mocked Label');
            expect(result.current.data.getTests[0].config[0].correctAnswer).toBe('Mocked Correct Answer');
            expect(result.current.isLoading).toBe(false);
            expect(result.current.error).toBe(undefined);
        });
    });
});