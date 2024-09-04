import { Component, inject, OnInit } from '@angular/core';
import { Book } from '@models';
import { Store } from '@ngrx/store';
import { deleteBook, loadBooks, selectBooks } from '@store/books';
import { Observable } from 'rxjs';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { DialogService } from 'primeng/dynamicdialog';
import { ButtonModule } from 'primeng/button';
import { BookCreateEditModalComponent } from '../book-create-edit-modal/book-create-edit-modal.component';
import { HighlightDirective } from '@directives';
import { FormatterPipe } from '@pipes';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    HighlightDirective,
    FormatterPipe,
  ],
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrl: './books-list.component.scss',
})
export class BooksListComponent implements OnInit {
  private readonly store = inject(Store);
  private readonly dialogService = inject(DialogService);

  books$: Observable<Book[]> = this.store.select(selectBooks);

  ngOnInit() {
    this.store.dispatch(loadBooks());
  }

  editBook(book: Book) {
    this.dialogService.open(BookCreateEditModalComponent, {
      header: 'Edit book',
      width: '50%',
      closable: true,
      data: {
        book,
      }
    });
  }

  addBook() {
    this.dialogService.open(BookCreateEditModalComponent, {
      header: 'Add book',
      width: '50%',
      closable: true,
      data: {
        book: null
      }
    });
  }

  removeBook(bookId: number) {
    this.store.dispatch(deleteBook({ bookId }));
  }
}
