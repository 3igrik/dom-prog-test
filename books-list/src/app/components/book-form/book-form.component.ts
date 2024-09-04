import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, inject, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { Book } from '../../models/book.model';
import { BookFormControlName } from './book-form-control-names.enum';

@Component({
  standalone: true,
  selector: 'app-book-form',
  imports: [CommonModule, ReactiveFormsModule, InputTextModule, ButtonModule],
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.scss',
})
export class BookFormComponent implements OnChanges {
  @Input() book: Book | null = null;
  @Output() save = new EventEmitter<Book>();

  private readonly fb = inject(FormBuilder);

  readonly BookFormControlName = BookFormControlName;

  form: FormGroup = this.fb.group({
    [BookFormControlName.ID]: [null],
    [BookFormControlName.TITLE]: ['', Validators.required],
    [BookFormControlName.AUTHOR]: ['', Validators.required],
    [BookFormControlName.YEAR]: [
      '', [Validators.required, Validators.min(1), Validators.max(new Date().getFullYear())]
    ],
    [BookFormControlName.PAGES]: ['', [Validators.required, Validators.min(1)]],
  });

  ngOnChanges() {
    if (this.book) {
      this.form.patchValue(this.book);
    }
  }

  onSubmit() {
    if (this.form.valid) {
      this.save.emit(this.form.value);
    }
  }
}
