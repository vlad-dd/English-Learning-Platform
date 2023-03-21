import React from "react";
import { render, screen } from '@testing-library/react'
import TestApplication from "./presentational";
import TestApplicationContext from "./Context";
import { ApolloError } from "@apollo/client";
import { PARTIAL_TEXT_INPUT_ID, SELECT_INPUT_ID, TEXT_INPUT_ID } from "./constants";
import { get } from "lodash";
import { TestApplicationProviders } from "./jest-utils";

jest.mock('./components/text-input', () => () => <div data-testid='text-input'>Text Input</div>);
jest.mock('./components/select-input', () => () => <div data-testid='select-input'>Select Input</div>);
jest.mock('./components/partial-text-input', () => () => <div data-testid='partial-text-input'>Partial Input</div>);

const TestContextResponse = {
    data: {
        getTests: [{
            __typename: 'typename',
            type: 'default',
            config: [{
                __typename: 'config typename',
                label: 'Mocked Label',
                correctAnswer: 'Mocked Correct Answer'
            }]
        }]
    },
    isLoading: false,
    error: undefined
};

describe('TestApplication', () => {
    const config = get(TestContextResponse, 'data.getTests[0]');

    const changeConfigType = (type: string) => ({ getTests: [{ ...config, type }] });

    it('should render text input units', () => {
        render(
            <TestApplicationProviders ownContextResponse={TestContextResponse}>
                <TestApplication />
            </TestApplicationProviders>
        )
        expect(screen.getByTestId(TEXT_INPUT_ID)).toBeInTheDocument();
        expect(screen.getByText("Text Input")).toBeInTheDocument();
    });

    it('should render select input units', () => {
        render(
            <TestApplicationProviders ownContextResponse={{ ...TestContextResponse, data: changeConfigType('select') }}>
                <TestApplication />
            </TestApplicationProviders>)
        expect(screen.getByTestId(SELECT_INPUT_ID)).toBeInTheDocument();
        expect(screen.getByText("Select Input")).toBeInTheDocument();
    });

    it('should render partial input units', () => {
        render(
            <TestApplicationProviders ownContextResponse={{ ...TestContextResponse, data: changeConfigType('partial') }}>
                <TestApplication />
            </TestApplicationProviders>);
        expect(screen.getByTestId(PARTIAL_TEXT_INPUT_ID)).toBeInTheDocument();
        expect(screen.getByText("Partial Input")).toBeInTheDocument();
    });

    it('should render loading sign', () => {
        render(
            <TestApplicationProviders ownContextResponse={{ ...TestApplicationContext, isLoading: true }}>
                <TestApplication />
            </TestApplicationProviders>)
        expect(screen.getByText("Loading...")).toBeInTheDocument();
    });

    it('should render error message', () => {
        render(
            <TestApplicationProviders ownContextResponse={{ ...TestApplicationContext, error: new ApolloError({}) }}>
                <TestApplication />
            </TestApplicationProviders>)
        expect(screen.getByText("We have some troubles with request...")).toBeInTheDocument();
    });
});