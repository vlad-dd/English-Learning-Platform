import React from "react";
import { render, screen } from '@testing-library/react';
import SelectInputQuiz from ".";
import { SELECT_INPUT_ID } from "../../constants";
import { TestApplicationProviders } from "../../jest-utils";

jest.mock('./components/select', () => () => <div data-testid="select-input">Select Input</div>)

const TestContextResponse = {
    data: {
        getTests: [{
            __typename: 'typename',
            type: 'default',
            config: [{
                __typename: 'config typename',
                id: 1,
                firstPart: 'Mocked First Part',
                secondPart: 'Mocked Second Part',
                options: [{ label: 'Value', value: 'Value' }],
                label: 'Mocked Label',
                correctAnswer: 'Mocked Correct Answer'
            }]
        }]
    },
    isLoading: false,
    error: undefined
}
describe('SelectInputQuiz', () => {
    it('should render component', () => {
        render(
        <TestApplicationProviders ownContextResponse={TestContextResponse}>
            <SelectInputQuiz />
        </TestApplicationProviders>
        );
        expect(screen.getByText('Select Input')).toBeInTheDocument();
        expect(screen.getByTestId(SELECT_INPUT_ID)).toBeInTheDocument();
        expect(screen.getByText('Mocked First Part')).toBeInTheDocument();
        expect(screen.getByText('Mocked Second Part')).toBeInTheDocument();
    })
})