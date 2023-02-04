import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import useBoolean from './useBoolean';

describe('Use Boolean', () => {
    let config: any;
    describe('False Condition', () => {
        beforeEach(() => {
            config = renderHook(() => useBoolean());
        });

        it('should return false configuration', () =>{
            const { result } = config;
            expect(result.current[0]).toBe(false);
        });

        it('should change false to true after calling handleState', () => {
            const { result } = config;
            expect(result.current[0]).toBe(false);
            act(() => result.current[1]());
            expect(result.current[0]).toBe(true);
        });
    })

    describe('True Condition', () => {
        beforeEach(() => {
            config = renderHook(() => useBoolean(true));
        });

        it('should return true configuration', () =>{
            const { result } = config;
            expect(result.current[0]).toBe(true);
        });

        it('should change true to false after calling handleState', () => {
            const { result } = config;
            expect(result.current[0]).toBe(true);
            act(() => result.current[1]());
            expect(result.current[0]).toBe(false);
        });

    });
})
