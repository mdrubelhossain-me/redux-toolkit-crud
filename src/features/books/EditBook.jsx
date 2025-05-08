import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateBooks } from "./booksSlice"; // Adjust the path as needed
import { useLocation, useNavigate } from "react-router-dom";

const EditBook = () => {
  const location = useLocation(); // Access location state passed from previous page
  const dispatch = useDispatch(); // Initialize Redux dispatch
  const navigate = useNavigate(); // For programmatic navigation

  // Set up local state using values passed from location.state
  const [id] = useState(location.state.id);
  const [title, setTitle] = useState(location.state.title);
  const [author, setAuthor] = useState(location.state.author);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form behavior
    dispatch(updateBooks({ id, title, author })); // Dispatch update action
    navigate("/books-view", { replace: true }); // Redirect back to books view
  };

  return (
    <div className="container py-5">
      <div className="col-md-6 mx-auto">
        <h2>Edit Book</h2>
        {/* Form to edit book details */}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            {/* Input for book title */}
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
            {/* Input for author name */}
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
          {/* Submit button to trigger update */}
          <button type="submit" className="btn btn-primary">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditBook;
