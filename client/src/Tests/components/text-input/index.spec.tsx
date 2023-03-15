import React from "react";
import { render, screen } from '@testing-library/react'
import TextInput from ".";
import { ITestItems } from "../../types";

describe('TextInput', () => {
    const data: Pick<ITestItems, 'config'> =
    {
        config: [
            { label: 'Mocked Label', correctAnswer: 'Mocked Correct Answer' }
        ]
    }

    it('should render label', () => {
        render(<TextInput {...data} />);
        const label = screen.getByTestId("text-input-label");
        expect(screen.getByText('Mocked Label')).toBeInTheDocument();
        expect(label.getAttribute("aria-label")).toBe("mixed verbs sentence");
        screen.debug();
    })

    it('should render input', () => {
        render(<TextInput {...data} />);
        const input = screen.getByTestId("text-input");
        expect(input).toBeInTheDocument();
        expect(input.getAttribute("class")).toBe("ant-input")
        expect(input.getAttribute("value")).toBe("")
    })


})