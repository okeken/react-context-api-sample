import React, { useState, useContext } from 'react';
import Book from './book';
import { BookContext } from './BookContext';

const BookList = () => {
  const [books, setBooks] = useContext(BookContext);
  return (
    <>
      {books.map((m) => (
        <Book
          title={m.book}
          author={m.author}
          publicationYear={m.publicationYear}
        />
      ))}
    </>
  );
};

export default BookList;
