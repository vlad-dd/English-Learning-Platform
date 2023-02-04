//@ts-nocheck
import { renderHook } from '@testing-library/react';
import { useAlertController } from '.';

describe('useAlertController', () => {
    const sentenceMock = [{0: { id: 1, missed: 'Do', partOne: 'MockedPartOne', partTwo: 'MockedPartTwo' }}]

    it('should render useAlertController for correct option', () => {
       const { result } =  renderHook(() => useAlertController({ points: 10, sentences: sentenceMock, alert: 'CORRECT' }))
       expect(result.current.props.message).toBe('Correct answer!');
       expect(result.current.props.type).toBe('success');
    });

    it('should render useAlertController for wrong option', () => {
        const { result } =  renderHook(() => useAlertController({ points: 10, sentences: sentenceMock, alert: 'UNCORRECT' }))
        expect(result.current.props.message).toBe('Wrong answer, try again!');
        expect(result.current.props.type).toBe('error');
     });

     it('should render useAlertController for last option', () => {
        const { result } =  renderHook(() => useAlertController({ points: 10, sentences: sentenceMock, alert: 'LAST' }))
        expect(result.current.props.message).toBe('Correct, you have passed an assignment🎉!');
        expect(result.current.props.type).toBe('success');
     });

})