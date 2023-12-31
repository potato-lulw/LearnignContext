import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../context/theme-context'


export default function BookList() {

  const  {isLight, light, dark} = useContext(ThemeContext);

  
  
  const theme = isLight? light : dark;
  return (
    <div className='book-list' style={{color:theme.syntax, background:theme.bg}}>
        <ul>
            <li style={{background: theme.ui}}>Whispers of Eternity</li>
            <li style={{background: theme.ui}}>Echos in the Mist</li>
            <li style={{background: theme.ui}}>The Enigma Chronicales</li>
        </ul>
    </div>
  )
}
