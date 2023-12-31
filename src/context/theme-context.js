import { createContext, useState } from "react";

export const ThemeContext = createContext();



export default function ThemeContextProvider({children}) {
    // const [isLight, setIsLight] = useState(true);
    // const [light, setLight] = useState({syntax: '#555', ui: '#ddd', bg: '#eee'});
    // const [dark, setDark] = useState({syntax: '#ddd', ui: '#333', bg: '#555'})

    const [theme,  setTheme ] = useState({
      isLight: true,
      light: {syntax: '#555', ui: '#ddd', bg: '#eee'},
      dark: {syntax: '#ddd', ui: '#333', bg: '#555'}
    });

    // const toggleTheme = () => {
    //   setTheme({ isLight: !theme.isLight });
    // };

    const toggleTheme = () => {
      setTheme(prevTheme => ({
        ...prevTheme,
        isLight: !prevTheme.isLight
      }));
    };

    // const state = { isLight, light, dark, };
  return (
    
    <ThemeContext.Provider value = {{...theme , toggleTheme: toggleTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}
