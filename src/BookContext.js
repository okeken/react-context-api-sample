import React, { createContext, useState } from 'react';

export const BookContext = createContext();

export const BookProvider = (props) => {
  const [books, setBooks] = useState([
    {
      author: 'Danny Fryman',
      book: 'Wining ways',
      publicationYear: 2004,
    },
    {
      author: 'Tom Lenny',
      book: 'The Contect Loop',
      publicationYear: 2010,
    },
    {
      author: 'Bode Ewa',
      book: 'Accoounting the web',
      publicationYear: 2020,
    },
    {
      author: 'Robinson Pall',
      book: 'Coding and Computers',
      publicationYear: 2007,
    },
  ]);
  return (
    <BookContext.Provider value={[books, setBooks]}>
      {props.children}
    </BookContext.Provider>
  );
};
