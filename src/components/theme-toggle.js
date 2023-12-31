import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../context/theme-context';
export default function ThemeToggle() {

    const {isLight, light, dark,  toggleTheme} = useContext(ThemeContext);

    const theme = isLight ? light : dark;
  return (
    <button  onClick={toggleTheme} style={{background:theme.bg , color: theme.syntax}}>
        Toggle to {isLight ? 'dark': 'light'} mode
    </button>
  )
}
