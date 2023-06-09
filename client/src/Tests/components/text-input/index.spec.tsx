import { render, screen } from '@testing-library/react'
import TextInput from ".";
import * as TextInputWidget from "./use-text-input-widget";
import { TEXT_INPUT_ID, TEXT_INPUT_LABEL_DATA_TEST_ID } from '../../constants';

jest.mock("./use-text-input-widget");

describe('TextInput', () => {
    const textInputWidgetSpy = jest.spyOn(TextInputWidget, "useTextInputWidget");

    const TestContextResponse = {
        __typename: 'typename',
        config: [{
            __typename: 'config typename',
            label: 'Mocked Label',
            correctAnswer: 'Mocked Correct Answer'
        }]
    };

    beforeEach(() => {
        textInputWidgetSpy.mockReturnValue({ ...TestContextResponse });
        render(<TextInput />);
    });

    it('should render label', () => {
        expect(screen.getByTestId(TEXT_INPUT_LABEL_DATA_TEST_ID)).toBeInTheDocument();
        expect(screen.getByText("Mocked Label")).toBeInTheDocument();
    })

    it('should render input', () => {
        const input = screen.getByTestId(TEXT_INPUT_ID);
        expect(input.getAttribute("class")).toBe('ant-input');
        expect(input.getAttribute("type")).toBe('text');
        expect(input.getAttribute("value")).toBe('');
    });
});