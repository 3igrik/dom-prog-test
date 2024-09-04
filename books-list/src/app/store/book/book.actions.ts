import { Book } from '@models';
import { createAction, props } from '@ngrx/store';

export const loadBooks = createAction('[Book List] Load Books');
export const loadBooksSuccess = createAction('[Book List] Load Books Success', props<{ books: Book[] }>());
export const addBook = createAction('[Book Form] Add Book', props<{ book: Book }>());
export const updateBook = createAction('[Book Form] Update Book', props<{ book: Book }>());
export const deleteBook = createAction('[Book List] Delete Book', props<{ bookId: number }>());
