import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'books',
    loadComponent: () => import('./components/books-list/books-list.component').then(c => c.BooksListComponent),
    title: 'Books'
  },
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  { path: '**', redirectTo: '/books', pathMatch: 'full' },
];
