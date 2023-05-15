//@ts-nocheck
import { renderHook } from '@testing-library/react';
import useApplicationRouter from './useApplicationRouter';

it('should return router configuration', () => {
    const { result } = renderHook(() => useApplicationRouter());
    expect(result.current.router.routes[0].children[0].path).toBe('/');
    expect(result.current.router.routes[0].children[1].path).toBe('/Tenses/:type/:tense');
    expect(result.current.router.routes[0].children[2].path).toBe('/Grammar-Levels/:level/:theme');
    expect(result.current.router.routes[0].children[3].path).toBe('/Dictionary');
    expect(result.current.router.routes[0].children[4].path).toBe('/Releases');
    expect(result.current.router.routes[0].children[5].path).toBe('/Tests/:part/:theme');
})