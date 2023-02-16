/* eslint-disable react/display-name */
import { renderHook } from '@testing-library/react';
import useApplicationRouter from './useApplicationRouter';

it('should return router configuration', () => {
    const { result } = renderHook(() => useApplicationRouter());
    expect(result.current.router.routes[0].path).toBe('/');
    expect(result.current.router.routes[1].path).toBe('/login');
    expect(result.current.router.routes[2].path).toBe('/registration');
    expect(result.current.router.routes[3].path).toBe('/Tenses/:type/:tense');
})