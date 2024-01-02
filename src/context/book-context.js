import React, { createContext, useState } from 'react'

export const BookContext = createContext();

export default function BookContextProvider({children}) {

    const [books, setBooks] = useState([{title:"Whispers of Eternity", id: 1},{title:"The Great Gatsby", id: 2},{title:"Echoes in the Mist", id: 3},{title:"The Enigma Chronicle", id: 4}])
  return (
    <BookContext.Provider value={{books, setBooks}}>
        {children}
    </BookContext.Provider>
  )
}
