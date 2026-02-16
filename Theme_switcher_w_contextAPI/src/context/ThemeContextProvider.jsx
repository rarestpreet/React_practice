import { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";

function ThemeContextProvider({ children }) {
    const [theme, setTheme] = useState('light');

    const darkTheme = () => {
        setTheme('dark');
    }
    const lightTheme = () => {
        setTheme('light');
    }

    useEffect(() => {
        const html = document.documentElement
        if (theme === 'dark') {
            html.classList.add('dark')
        } else {
            html.classList.remove('dark')
        }
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, darkTheme, lightTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider