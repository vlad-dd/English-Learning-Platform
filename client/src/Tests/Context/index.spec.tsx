import React, { useContext } from "react";
import { ApolloClient, ApolloError, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import store from "../../store";
import TestApplicationContext, { TestContext } from ".";
import * as TestConfiguration from "../use-test-configuration";
import { get } from "lodash";

const TestContextResponse = {
    data: {
        getTests: [{
            type: 'Mocked Type',
            config: [{
                label: 'Mocked Label',
                correctAnswer: 'Mocked Correct Answer'
            }]
        }]
    },
    isLoading: false,
    error: undefined
}

const MockComponent = () => {
    const { data, isLoading, error }: any = useContext(TestContext);
    const { type, config } = get(data, "getTests[0]");
    const isVisible = data && !isLoading && !error;
    return (
        <div>
            {isVisible && config.map(({ label, correctAnswer }: { label: string, correctAnswer: string }) => (
                <div key={label}>
                    <p>{type}</p>
                    <label>{label}</label>
                    <div>{correctAnswer}</div>
                </div>
            ))}
            {isLoading && <div>Loading...</div>}
            {error && <div>Something happened with request...</div>}
        </div>
    )
}

const client = new ApolloClient({
    uri: "http://localhost:4000",
    cache: new InMemoryCache(),
});

const ApplicationProviders = ({ children }: { children: JSX.Element }) => {
    return (
        <ApolloProvider client={client}>
            <Provider store={store}>
                <TestApplicationContext>
                    {children}
                </TestApplicationContext>
            </Provider>
        </ApolloProvider>
    )

}

describe('Test Application Context', () => {
    const testSpy = jest.spyOn(TestConfiguration, 'useTestConfiguration');
    it('should render data for wrapped component', () => {
        const testContent = ['Mocked Type', 'Mocked Label', 'Mocked Correct Answer'];
        testSpy.mockReturnValue(TestContextResponse)
        render(<ApplicationProviders><MockComponent /></ApplicationProviders>)
        screen.debug();
        testContent.forEach((content: string) => expect(screen.getByText(content)).toBeInTheDocument());
    });

    it('should return loading sign if it is loading', () => {
        testSpy.mockReturnValue({ ...TestContextResponse, isLoading: true });
        render(<ApplicationProviders><MockComponent /></ApplicationProviders>)
        expect(screen.getByText("Loading...")).toBeInTheDocument();
        screen.debug();
    });

    it('should return error sign if it fails', () => {
        testSpy.mockReturnValue({ ...TestContextResponse, error: new ApolloError({}) });
        render(<ApplicationProviders><MockComponent /></ApplicationProviders>)
        expect(screen.getByText("Something happened with request...")).toBeInTheDocument();
    });
});