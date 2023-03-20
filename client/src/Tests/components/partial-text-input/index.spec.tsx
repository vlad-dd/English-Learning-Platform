import React from "react";
import { fireEvent, render, screen } from '@testing-library/react';
import PartialTextInput from ".";
import { PARTIAL_TEXT_INPUT_ID } from "../../constants";
import { TestApplicationProviders } from "../../jest-utils";

describe('PartialTextInput', () => {

    const TestContextResponse = {
        data: {
            getTests: [{
                __typename: 'typename',
                config: [{
                    id: 1,
                    __typename: 'config typename',
                    textBefore: 'Mocked textBefore',
                    textAfter: 'Mocked textAfter',
                    defaultValue: '(Mocked defaultValue)',
                    correctAnswer: 'Mocked Correct Answer'
                }]
            }]
        }
    }

    it('should render component', () => {
        render(
            <TestApplicationProviders ownContextResponse={TestContextResponse}>
                <PartialTextInput />
            </TestApplicationProviders>
        );
        const input = screen.getByTestId(PARTIAL_TEXT_INPUT_ID);
        expect(input).toBeInTheDocument();
        expect(input.getAttribute('class')).toBe('ant-input');
        expect(input.getAttribute('value')).toBe('(Mocked defaultValue)');
        expect(screen.getByText("Mocked textBefore")).toBeInTheDocument();
        expect(screen.getByText("Mocked textAfter")).toBeInTheDocument();
    })

    describe('input logic', () => {
        let wrapper: any;
        let input: any;

        beforeEach(() => {
            wrapper = render(
                <TestApplicationProviders ownContextResponse={TestContextResponse}>
                    <PartialTextInput />
                </TestApplicationProviders>
            );
            input = screen.getByTestId(PARTIAL_TEXT_INPUT_ID);
        });

        it('should mark the border with green color', () => {
            const { container } = wrapper;
            fireEvent.change(input, { target: { value: 'Mocked Correct Answer' } })
            fireEvent.keyDown(input, { key: 'Enter' });
            const inputBorder = container.querySelector(".ant-input-group-wrapper")
            expect(inputBorder?.getAttribute('style')).toBe('border: 1px solid green;')
        });

        it('should mark the border with red color because of incorrect answer', () => {
            const { container } = wrapper;
            fireEvent.change(input, { target: { value: 'Mocked Incorrect Answer' } })
            fireEvent.keyDown(input, { key: 'Enter' });
            const inputBorder = container.querySelector(".ant-input-group-wrapper")
            expect(inputBorder?.getAttribute('style')).toBe('border: 1px solid red;')
        });

        it('should mark the border with red color if there is no answer and Enter was pressed', () => {
            const { container } = wrapper;
            fireEvent.keyDown(input, { key: 'Enter' });
            const inputBorder = container.querySelector(".ant-input-group-wrapper")
            expect(inputBorder?.getAttribute('style')).toBe('border: 1px solid red;')
        });
    });

});