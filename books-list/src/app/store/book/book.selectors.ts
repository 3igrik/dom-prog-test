import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BookState } from './book.reducer';

export const selectBookState = createFeatureSelector<BookState>('book');

export const selectBooks = createSelector(
  selectBookState,
  (state: BookState) => state.books
);
