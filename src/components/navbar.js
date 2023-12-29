import React, {useContext} from 'react'
import { ThemeContext } from '../context/theme-context'

export default function Navbar() {
  const {isLight, light, dark} = useContext(ThemeContext);
  const theme = isLight ? light : dark;
  return (
    <nav style={{background: theme.ui, color: theme.syntax}}>
        <h1>Context App</h1>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
  )
}
