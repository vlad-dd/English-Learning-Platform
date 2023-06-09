import { act, renderHook } from "@testing-library/react";
import { useSubmitAnswerWidget } from ".";

describe('useSubmitAnswerWidget', () => {
    it('should add object with true value', () => {
        const { result } = renderHook(() => useSubmitAnswerWidget())
        act(() => result.current.submitAnswer('Enter', 0, 'correct answer', 'Correct answer'))
        expect(result.current.submittedResult).toEqual({ 0: 1 });
    });

    it('should add object with false value', () => {
        const { result } = renderHook(() => useSubmitAnswerWidget())
        act(() => result.current.submitAnswer('Enter', 1, 'correct answer', 'Incorrect answer'))
        expect(result.current.submittedResult).toEqual({ 1: 0 });
    });

    it('should not add object if key is not equal to Enter', () => {
        const { result } = renderHook(() => useSubmitAnswerWidget())
        act(() => result.current.submitAnswer('Tab', 1, 'correct answer', 'Incorrect answer'))
        expect(result.current.submittedResult).toEqual({});
    });
});