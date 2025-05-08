import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBooks } from "./booksSlice";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const numbeOfBooks = useSelector((state) => state.booksReducer.books.length);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      id: numbeOfBooks + 1,
      title,
      author,
    };
    dispatch(addBooks(newBook));
    navigate("/books-view", { replace: true });
  };

  return (
    <div className="container py-5">
      <div className="col-md-6 mx-auto">
        <h2 className="mb-3">Add a New Book</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title" class="form-label">
              Book Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter book title"
              required
            />
          </div>
          <div class="mb-3">
            <label htmlFor="author" className="form-label">
              Author Name
            </label>
            <input
              type="text"
              className="form-control"
              id="author"
              name="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Enter author name"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
