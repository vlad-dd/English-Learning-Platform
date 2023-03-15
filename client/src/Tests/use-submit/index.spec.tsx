import { act, renderHook } from "@testing-library/react";
import { useSubmit } from ".";

describe('useSubmit', () => {
    it('should add object with true value', () => {
        const { result } = renderHook(() => useSubmit())
        act(() => result.current.submitAnswer('Enter', 0, 'correct answer', 'Correct answer'))
        expect(result.current.submittedResult).toEqual({ 0: true });
    });

    it('should add object with false value', () => {
        const { result } = renderHook(() => useSubmit())
        act(() => result.current.submitAnswer('Enter', 1, 'correct answer', 'Incorrect answer'))
        expect(result.current.submittedResult).toEqual({ 1: false });
    });
});