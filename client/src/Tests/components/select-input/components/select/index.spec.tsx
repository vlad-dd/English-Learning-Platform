import React from "react";
import { fireEvent, render, screen } from '@testing-library/react';
import SelectInput, { ISelect } from ".";
import { SELECT_INPUT_ID } from "../../../../constants";

describe('SelectInput', () => {
    
    const props: ISelect = {
        index: 0,
        correctAnswer: 'Value_1',
        options: [
            {label: 'Value_1',  value: 'Value_1'},
            {label: 'Value_2',  value: 'Value_2'}
        ],
        handleChange: jest.fn(),
        selectedOptions: { 0: 1 }
    };

    it('should render select with green border', () => {
        render(<SelectInput {...props} />);
        expect(screen.getByTestId("select-input").getAttribute("style")).toBe("width: 120px; border: 1px solid green;");
        expect(screen.getByRole('combobox')).toBeInTheDocument();
    });

    it('should render select with red border', () => {
        render(<SelectInput {...{...props, selectedOptions: { 0: 0 }}} />);
        expect(screen.getByTestId("select-input").getAttribute("style")).toBe("width: 120px; border: 1px solid red;");
        expect(screen.getByRole('combobox')).toBeInTheDocument();
    });
})