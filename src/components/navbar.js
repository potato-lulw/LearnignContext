import React, {useContext} from 'react'
import { ThemeContext } from '../context/theme-context'
import { AuthContext } from '../context/auth-context';

export default function Navbar() {

  const {isLight, light, dark} = useContext(ThemeContext);
  const {isAuthenticated, setIsAuthenticated} = useContext(AuthContext);
  const theme = isLight ? light : dark;
  return (
    <nav style={{background: theme.ui, color: theme.syntax}}>
        <h1>Context App</h1>
        <div style={{cursor: 'pointer'}}onClick={() => {setIsAuthenticated(!isAuthenticated)}}>
          {isAuthenticated ? "Logged in" : "Logged out"}
        </div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
  )
}
