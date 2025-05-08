import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBooks } from "./booksSlice"; // Adjust the path based on your project structure
import { Link } from "react-router-dom";

const BooksView = () => {
  const books = useSelector((state) => state.booksReducer.books);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteBooks(id));
  };

  return (
    <div className="container py-5">
      <h1 className="mb-3">Books View</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books &&
            books.map((book) => {
              const { id, title, author } = book;
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{title}</td>
                  <td>{author}</td>
                  <td>
                    <Link to="/edit-book" state={{id, title, author}} className="text-decoration-none">
                      <button className="btn btn-primary me-2">Edit</button>
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        handleDelete(id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default BooksView;
