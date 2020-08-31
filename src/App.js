import React from "react";

import BookList from './bookList';
import { BookProvider } from './BookContext';

export default function App() {
  return (
    <div>
   <BookProvider>
      <BookList />
    </BookProvider>
    </div>
  );
}
