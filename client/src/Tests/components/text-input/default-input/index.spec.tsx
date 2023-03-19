import React from "react";
import { render, screen, fireEvent } from '@testing-library/react'
import DefaultTextInput from '.';
import { TEXT_INPUT_ID } from "../../../constants";

describe('Default Input', () => {
    const data =
    {
        index: 1,
        correctAnswer: 'Mock Answer',
        textInputRefs: null
    };

    beforeEach(() => {
        render(<DefaultTextInput {...data} ref={null} />)
    });

    it('should render default input with its attributes', () => {
        expect(screen.getByRole('textbox')).toBeInTheDocument();
        expect(screen.getByTestId(TEXT_INPUT_ID)).toBeInTheDocument();
        expect(screen.getByTestId(TEXT_INPUT_ID).getAttribute('class')).toBe("ant-input");
        expect(screen.getByTestId(TEXT_INPUT_ID).getAttribute('value')).toBe("");
    });

    it('should set green border if input value is equal to correct answer', () => {
        fireEvent.change(screen.getByTestId(TEXT_INPUT_ID), { target: { value: 'Mock Answer' } })
        fireEvent.keyDown(screen.getByTestId(TEXT_INPUT_ID), { key: 'Enter' })
        expect(screen.getByTestId(TEXT_INPUT_ID).getAttribute('style')).toBe("border: 1px solid green;");
    });

    it('should set red border if input value is equal to incorrect answer', () => {
        fireEvent.change(screen.getByTestId(TEXT_INPUT_ID), { target: { value: '123' } })
        fireEvent.keyDown(screen.getByTestId(TEXT_INPUT_ID), { key: 'Enter' })
        expect(screen.getByTestId(TEXT_INPUT_ID).getAttribute('style')).toBe("border: 1px solid red;");
    });
});
