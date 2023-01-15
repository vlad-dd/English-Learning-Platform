
import React, { createContext } from 'react';
import { useBoolean, TUseBoolean } from '../Hooks';

export const ThemeStateController = createContext<TUseBoolean | null>(null);

const ThemeContext = ({ children }: { children: JSX.Element }) => {
    const [defaultTheme, changeDefaultTheme] = useBoolean(false);
    const theme = defaultTheme ? "light" : "dark";
    const themeInHex = defaultTheme ? '#fff' : '#001529';
    const fonts = defaultTheme ? 'black' : '#fff'
    return (
        <ThemeStateController.Provider value={{ theme, defaultTheme, themeInHex, fonts ,changeDefaultTheme }}>
         {children}
        </ThemeStateController.Provider>
    )
}

export default ThemeContext;