import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../context/theme-context'
import { BookContext } from '../context/book-context';


export default function BookList() {

  const  {isLight, light, dark} = useContext(ThemeContext);

  const {books, setBooks} = useContext(BookContext);
  
  const theme = isLight? light : dark;
  return (
    <div className='book-list' style={{color:theme.syntax, background:theme.bg}}>
        <ul>

            {books.map(book =>{
              return (<li key={book.id} style={{background: theme.ui}}>{book.title}</li>);
            })}
            {/* <li style={{background: theme.ui}}>Whispers of Eternity</li>
            <li style={{background: theme.ui}}>Echos in the Mist</li>
            <li style={{background: theme.ui}}>The Enigma Chronicales</li> */}
        </ul>
    </div>
  )
}
