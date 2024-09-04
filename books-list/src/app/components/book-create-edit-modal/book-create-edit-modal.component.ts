import { Component, Input, inject } from '@angular/core';
import { Book } from '../../models/book.model';
import { BookFormComponent } from '../book-form/book-form.component';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Store } from '@ngrx/store';
import { addBook, updateBook } from '@store/books';

@Component({
  standalone: true,
  selector: 'app-book-create-edit-modal',
  imports: [BookFormComponent],
  templateUrl: './book-create-edit-modal.component.html',
  styleUrl: './book-create-edit-modal.component.scss',
})
export class BookCreateEditModalComponent {
  private readonly store = inject(Store);
  private readonly ref = inject(DynamicDialogRef);
  private readonly config = inject(DynamicDialogConfig);

  @Input() book: Book | null = this.config.data['book'] || null;

  onSave(book: Book) {
    const isUpdating = Boolean(this.book);

    if (isUpdating) {
      this.store.dispatch(updateBook({book}));
    } else {
      book.id = Math.round(Math.random() * 1000);

      this.store.dispatch(addBook({book}));
    }

    this.ref.close();
  }
}
