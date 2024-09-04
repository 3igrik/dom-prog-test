import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadBooks, loadBooksSuccess, addBook, updateBook, deleteBook } from './book.actions';
import { map, mergeMap, tap } from 'rxjs/operators';
import { BookService } from '@services';
import { of } from 'rxjs';

@Injectable()
export class BookEffects {
  private readonly actions$ = inject(Actions);
  private readonly bookService = inject(BookService);

  loadBooks$ = createEffect(() => this.actions$.pipe(
    ofType(loadBooks),
    mergeMap(() => of(this.bookService.getBooks())),
    map(books => loadBooksSuccess({ books })),
  ));

  addBook$ = createEffect(() => this.actions$.pipe(
    ofType(addBook),
    tap(action => {
      this.bookService.addBook(action.book);
    })
  ), { dispatch: false });

  updateBook$ = createEffect(() => this.actions$.pipe(
    ofType(updateBook),
    tap(action => this.bookService.updateBook(action.book))
  ), { dispatch: false });

  deleteBook$ = createEffect(() => this.actions$.pipe(
    ofType(deleteBook),
    tap(action => this.bookService.deleteBook(action.bookId))
  ), { dispatch: false });
}
