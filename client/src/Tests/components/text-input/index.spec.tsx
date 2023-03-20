import React from "react";
import { render, screen } from '@testing-library/react'
import TextInput from ".";
import { TEXT_INPUT_ID } from "../../constants";
import { TestApplicationProviders } from "../../jest-utils";

describe('TextInput', () => {

    const TestContextResponse = {
        data: {
            getTests: [{
                __typename: 'typename',
                config: [{
                    __typename: 'config typename',
                    label: 'Mocked Label',
                    correctAnswer: 'Mocked Correct Answer'
                }]
            }]
        }
    };

    beforeEach(() => {
        render(
            <TestApplicationProviders ownContextResponse={TestContextResponse}>
                <TextInput />
            </TestApplicationProviders>
        );
    });

    it('should render label', () => {
        const label = screen.getByTestId("text-input-label");
        expect(label.getAttribute("aria-label")).toBe('mixed verbs sentence');
        expect(screen.getByText("Mocked Label")).toBeInTheDocument();
    })

    it('should render input', () => {
        const input = screen.getByTestId(TEXT_INPUT_ID);
        expect(input.getAttribute("class")).toBe('ant-input');
        expect(input.getAttribute("type")).toBe('text');
        expect(input.getAttribute("value")).toBe('');
    });
});