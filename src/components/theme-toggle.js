import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../context/theme-context';
export default function ThemeToggle() {

    const {isLight, toggleTheme} = useContext(ThemeContext);

    
  return (
    <button  onClick={toggleTheme}>
        Toggle to {isLight ? 'dark': 'light'} mode
    </button>
  )
}
