import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBooks } from "./booksSlice"; // Redux action to add a new book
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  // Local state for book title and author inputs
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  // Get the current number of books from Redux store
  const numbeOfBooks = useSelector((state) => state.booksReducer.books.length);

  const dispatch = useDispatch(); // Used to dispatch actions to the Redux store
  const navigate = useNavigate(); // Used to navigate to a different route

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Create a new book object with a unique ID
    const newBook = {
      id: numbeOfBooks + 1,
      title,
      author,
    };

    dispatch(addBooks(newBook)); // Dispatch action to add the new book to the Redux store
    navigate("/books-view", { replace: true }); // Redirect to the books view page
  };

  return (
    <div className="container py-5">
      <div className="col-md-6 mx-auto">
        <h2 className="mb-3">Add a New Book</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            {/* Label and input for book title */}
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
            {/* Label and input for author name */}
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
          {/* Submit button */}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
