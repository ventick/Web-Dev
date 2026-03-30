import { Routes } from '@angular/router';
import { CatalogPageComponent } from './pages/catalog-page.component';

export const routes: Routes = [
  {
    path: '',
    component: CatalogPageComponent,
    title: 'Catalog | Kaspi Picks'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
