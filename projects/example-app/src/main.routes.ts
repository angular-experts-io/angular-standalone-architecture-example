import { Routes } from '@angular/router';

export const mainRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./features/home/home.routes').then((routes) => routes.routes),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./features/admin/admin.routes').then((routes) => routes.routes),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
