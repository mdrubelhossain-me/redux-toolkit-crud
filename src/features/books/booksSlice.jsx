import { createSlice } from "@reduxjs/toolkit";

// Initial state containing a list of predefined books
const initialBooks = {
  books: [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
    },
  ],
};

// Creating a Redux slice for books
export const booksSlice = createSlice({
  name: "books", // Slice name
  initialState: initialBooks, // Initial state
  reducers: {
    // Returns current state (useful for selecting/showing books)
    showBooks: (state) => state,

    // Adds a new book to the state
    addBooks: (state, action) => {
      state.books.push(action.payload);
    },

    // Updates a book's title and author by ID
    updateBooks: (state, action) => {
      const { id, title, author } = action.payload;
      const bookIndex = state.books.findIndex((book) => book.id === id);
      if (bookIndex !== -1) {
        state.books[bookIndex].title = title;
        state.books[bookIndex].author = author;
      }
    },

    // Deletes a book from the state by ID
    deleteBooks: (state, action) => {
      const id = action.payload;
      state.books = state.books.filter((book) => book.id !== id);
    },
  },
});

// Exporting all actions
export const { showBooks, addBooks, deleteBooks, updateBooks } =
  booksSlice.actions;

// Exporting the reducer to use in the Redux store
export default booksSlice.reducer;
