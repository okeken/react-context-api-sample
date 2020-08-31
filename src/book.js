import React from 'react';

const Book = ({ title, author, publicationYear }) => {
  return (
    <>
      <h3>{title}</h3>
      <h4>{author}</h4>
      <p>{publicationYear}</p>
      <hr />
    </>
  );
};

export default Book;
