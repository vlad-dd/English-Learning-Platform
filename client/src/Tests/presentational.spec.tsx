import { render, screen } from '@testing-library/react'
import { TestApplicationProviders } from "./jest-utils";
import * as TestConfig from './use-test-configuration';
import { extractByPath } from "../utils/utils";
import { buildApolloError } from '../test-utils';
import TestApplication from "./presentational";
import { PARTIAL_TEXT_INPUT_ID, SELECT_INPUT_ID, TEXT_INPUT_ID } from "./constants";

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
    const spy = jest.spyOn(TestConfig, "useTestConfigurationWidget");
    const config = extractByPath(TestContextResponse, 'data.getTests[0]');

    const changeConfigType = (type: string) => ({ getTests: [{ ...config, type }] });

    it('should render text input units', () => {
        spy.mockReturnValue({ ...TestContextResponse });
        render(
            <TestApplicationProviders>
                <TestApplication />
            </TestApplicationProviders>
        )
        expect(screen.getByTestId(TEXT_INPUT_ID)).toBeInTheDocument();
        expect(screen.getByText("Text Input")).toBeInTheDocument();
    });

    it('should render select input units', () => {
        spy.mockReturnValue({ ...TestContextResponse, data: changeConfigType("select") });
        render(
            <TestApplicationProviders>
                <TestApplication />
            </TestApplicationProviders>)
        expect(screen.getByTestId(SELECT_INPUT_ID)).toBeInTheDocument();
        expect(screen.getByText("Select Input")).toBeInTheDocument();
    });

    it('should render partial input units', () => {
        spy.mockReturnValue({  ...TestContextResponse, data: changeConfigType("partial") });
        render(
            <TestApplicationProviders>
                <TestApplication />
            </TestApplicationProviders>);
        expect(screen.getByTestId(PARTIAL_TEXT_INPUT_ID)).toBeInTheDocument();
        expect(screen.getByText("Partial Input")).toBeInTheDocument();
    });

    it('should render loading sign', () => {
        spy.mockReturnValue({ ...TestContextResponse, isLoading: true });
        render(
            <TestApplicationProviders>
                <TestApplication />
            </TestApplicationProviders>)
        expect(screen.getByTestId("loading-progress")).toBeInTheDocument();
    });

    it('should render error message', () => {
        spy.mockReturnValue({ ...TestContextResponse, error: buildApolloError() });
        render(
            <TestApplicationProviders>
                <TestApplication />
            </TestApplicationProviders>)
        expect(screen.getByTestId("error-page")).toBeInTheDocument();
    });
});
