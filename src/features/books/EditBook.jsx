import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateBooks } from "./booksSlice"; // Adjust the path as needed
import { useLocation, useNavigate } from "react-router-dom";

const EditBook = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [id] = useState(location.state.id);
  const [title, setTitle] = useState(location.state.title);
  const [author, setAuthor] = useState(location.state.author);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateBooks({ id, title, author }));
    navigate("/books-view", { replace: true });
  };

  return (
    <div className="container py-5">
      <div className="col-md-6 mx-auto">
        <h2>Edit Book</h2>
        {/* Add your form or content here */}
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
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditBook;
