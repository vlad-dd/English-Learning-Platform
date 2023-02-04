import { renderHook } from '@testing-library/react';
import { ThemeContext } from '../../Contexts';
import useTheme from './use-theme';

it('should return theme configuration', () => {
    const { result } = renderHook(() => useTheme(), { wrapper: ThemeContext });
    expect(result.current.theme).toBe('dark');
    expect(result.current.defaultTheme).toBe(false);
    expect(result.current.themeInHex).toBe('#001529');
    expect(result.current.fonts).toBe('#fff');
    expect(result.current.changeDefaultTheme).toBeDefined();
})

