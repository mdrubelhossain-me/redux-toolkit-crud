import { createSlice } from "@reduxjs/toolkit";

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

export const booksSlice = createSlice({
  name: "books",
  initialState: initialBooks,
  reducers: {
    showBooks: (state) => state,
    addBooks: (state, action) => {
      state.books.push(action.payload);
    },
    updateBooks: (state, action) => {
        const { id, title, author } = action.payload;
        const bookIndex = state.books.findIndex((book) => book.id === id);
        if (bookIndex !== -1) {
            state.books[bookIndex].title = title;
            state.books[bookIndex].author = author;
        }
      },
    deleteBooks: (state, action) => {
      const id = action.payload;
      state.books = state.books.filter((book) => book.id !== id);
    },
  },
});

export const { showBooks, addBooks, deleteBooks, updateBooks } = booksSlice.actions;
export default booksSlice.reducer;
