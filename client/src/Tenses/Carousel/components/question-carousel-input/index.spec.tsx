import { fireEvent, render, screen } from '@testing-library/react';
import { BORDER_STATUS, QUESTION_CAROUSEL_INPUT_DATA_TEST_ID } from '../../../constants';
import QuestionCarouselInput from '.';

describe('QuestionCarouselInput', () => {

    const mockedProps = {
        borderColor: BORDER_STATUS['CORRECT'],
        showLastBanner: false,
        currentItem: {
            __typename: 'typename',
            id: 1,
            partOne: 'MockPartOne',
            partTwo:'MockPartTwo',
            missed: 'MockMissed'
        },
        actualSentenceIndex: 0,
        value: '',
        handleCheck: jest.fn(),
        setValue: jest.fn()
    };

    it('should render DefaultCarouselInput ', () => {
        const sentenceParts = ['MockPartOne', 'MockPartTwo']
        render(<QuestionCarouselInput {...mockedProps} />)
        expect(screen.getByTestId(QUESTION_CAROUSEL_INPUT_DATA_TEST_ID)).toBeInTheDocument();
        sentenceParts.forEach((part) => expect(screen.getByText(part)).toBeInTheDocument());
    });

    it('should have green border', () => {
        render(<QuestionCarouselInput {...mockedProps} />)
        expect(screen.getByRole('textbox').getAttribute('style')).toBe(`border: ${BORDER_STATUS.CORRECT};`);
    });

    it('should have red border', () => {
        const requiredProps = {
            ...mockedProps,
            borderColor: BORDER_STATUS['UNCORRECT']
        }
        render(<QuestionCarouselInput {...requiredProps} />)
        expect(screen.getByRole('textbox').getAttribute('style')).toBe(`border: ${BORDER_STATUS.UNCORRECT};`);
    });

    it('should have gray border', () => {
        const requiredProps = {
            ...mockedProps,
            borderColor: BORDER_STATUS['DEFAULT']
        }
        render(<QuestionCarouselInput {...requiredProps} />)
        expect(screen.getByRole('textbox').getAttribute('style')).toBe(`border: ${BORDER_STATUS.DEFAULT};`);
    });

    it('should be disabled', () => {
        const requiredProps = {
            ...mockedProps,
            showLastBanner: true,
            borderColor: BORDER_STATUS['CORRECT']
        }
        render(<QuestionCarouselInput {...requiredProps} />)
        expect(screen.getByTestId(QUESTION_CAROUSEL_INPUT_DATA_TEST_ID).getAttribute('disabled')).toBe("");
        expect(screen.getByRole('textbox').getAttribute('style')).toBe(`border: ${BORDER_STATUS.CORRECT};`);
    });

    it('should call handleCheck is pressed Enter', () => {
        render(<QuestionCarouselInput {...mockedProps} />)
        fireEvent.keyDown(screen.getByTestId(QUESTION_CAROUSEL_INPUT_DATA_TEST_ID), { key: 'Enter' })
        expect(mockedProps.handleCheck).toHaveBeenCalledTimes(1);
    });

    it('should call setValue if user typed something', () => {
        render(<QuestionCarouselInput {...mockedProps} />)
        fireEvent.change(screen.getByTestId(QUESTION_CAROUSEL_INPUT_DATA_TEST_ID), { target: { value: 'mocked input' } });
        expect(mockedProps.setValue).toHaveBeenCalledWith("mocked input");
        expect(mockedProps.setValue).toHaveBeenCalledTimes(1);
    });
});