// BookCard.js
import React from "react";

const BookCard = ({ book }) => {
  const { title, authors, publishedDate, imageLinks } = book.volumeInfo;

  return (
    <div className="book-card">
      <img src={imageLinks.thumbnail} alt={title} />
      <h3>{title}</h3>
      <p>Author: {authors ? authors.join(", ") : "Unknown"}</p>
      <p>Published Year: {publishedDate}</p>
    </div>
  );
};

export default BookCard;
