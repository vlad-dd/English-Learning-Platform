import React, { KeyboardEvent } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { STATUS } from '../../constants';
import DefaultCarouselInput from '.';

describe('DefaultCarouselInput', () => {
    const handleCheck = jest.fn((e: KeyboardEvent<HTMLElement>, inputValue: string) => {});
    const setValue = jest.fn((inputValue: string) => {});

    const mockedProps = {
        borderColor: STATUS['CORRECT'],
        showLastBanner: false,
        handleCheck,
        sentences: [{
            __typename: 'typename',
            id: 1,
            label: 'MockLabel',
            partOne: 'MockPartOne',
            partTwo:'MockPartTwo',
            missed: 'MockMissed'
        }],
        actualSentenceIndex: 0,
        value: '',
        setValue
    };

    it('should render DefaultCarouselInput ', () => {
        const sentenceParts = ['MockPartOne', 'MockPartTwo']
        render(<DefaultCarouselInput {...mockedProps} />)
        expect(screen.getByTestId('practice-input')).toBeInTheDocument();
        sentenceParts.forEach((part) => expect(screen.getByText(part)).toBeInTheDocument());
    });

    it('should have green border', () => {
        render(<DefaultCarouselInput {...mockedProps} />)
        expect(screen.getByRole('textbox').getAttribute('style')).toBe('border: 1px solid green;');
    });

    it('should have red border', () => {
        const requiredProps = {
            ...mockedProps,
            borderColor: STATUS['UNCORRECT']
        }
        render(<DefaultCarouselInput {...requiredProps} />)
        expect(screen.getByRole('textbox').getAttribute('style')).toBe('border: 1px solid red;');
    });

    it('should have gray border', () => {
        const requiredProps = {
            ...mockedProps,
            borderColor: STATUS['DEFAULT']
        }
        render(<DefaultCarouselInput {...requiredProps} />)
        expect(screen.getByRole('textbox').getAttribute('style')).toBe('border: 1px solid gainsboro;');
    });

    it('should be disabled', () => {
        const requiredProps = {
            ...mockedProps,
            showLastBanner: true,
            borderColor: STATUS['CORRECT']
        }
        render(<DefaultCarouselInput {...requiredProps} />)
        expect(screen.getByTestId('practice-input').getAttribute('disabled')).toBe("");
        expect(screen.getByRole('textbox').getAttribute('style')).toBe('border: 1px solid green;');
    });

    it('should call handleCheck is pressed Enter', () => {
        render(<DefaultCarouselInput {...mockedProps} />)
        fireEvent.keyDown(screen.getByTestId('practice-input'), { key: 'Enter' })
        expect(handleCheck).toHaveBeenCalledTimes(1);
    });


    it('should call setValue if user typed something', () => {
        render(<DefaultCarouselInput {...mockedProps} />)
        fireEvent.change(screen.getByTestId('practice-input'), { target: { value: 'mocked input' } });
        expect(setValue).toHaveBeenCalledWith("mocked input");
        expect(setValue).toHaveBeenCalledTimes(1);
    });

});