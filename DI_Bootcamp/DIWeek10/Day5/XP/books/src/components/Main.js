import React, { useState, useEffect } from "react";
import Search from "./Search";
import BookList from "./BookList";

const Main = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (search.trim() !== "") {
      fetchBooks();
    }
  }, [search]);

  const fetchBooks = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${search}`
      );
      const data = await response.json();
      if (data.books) {
        setBooks(data.books);
      }
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };
  // called by main
  const handleSearch = (value) => {
    setSearch(value);
  };

  return (
    <div>
      <Search onSearch={handleSearch} />
      <BookList books={books} />
    </div>
  );
};

export default Main;
