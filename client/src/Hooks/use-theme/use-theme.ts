import { useContext } from 'react';
import { ThemeStateController } from '../../Contexts';


const useTheme = () => {
    const { theme, defaultTheme, themeInHex, fonts, changeDefaultTheme } = useContext(ThemeStateController);

    return { theme, defaultTheme, themeInHex, fonts, changeDefaultTheme };
}

export default useTheme;