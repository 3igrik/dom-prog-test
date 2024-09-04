import { createReducer, on } from '@ngrx/store';
import { addBook, updateBook, deleteBook, loadBooksSuccess } from './book.actions';
import { Book } from '@models';

export interface BookState {
  books: Book[];
}

export const initialState: BookState = {
  books: []
};

export const bookReducer = createReducer(
  initialState,
  on(loadBooksSuccess, (state, { books }) => ({ ...state, books })),
  on(addBook, (state, { book }) => ({ ...state, books: [...state.books, book] })),
  on(updateBook, (state, { book }) => ({
    ...state, 
    books: state.books.map(b => b.id === book.id ? book : b)
  })),
  on(deleteBook, (state, { bookId }) => ({
    ...state, 
    books: state.books.filter(b => b.id !== bookId)
  }))
);
