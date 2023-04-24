import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/vendas',
    pathMatch: 'full',
  },
  {
    path: 'vendas',
    loadComponent: () => import('./paginas/vendas/vendas.page').then( m => m.VendasPage)
  },
  {
    path: 'recebiveis',
    loadComponent: () => import('./paginas/recebiveis/recebiveis.page').then( m => m.RecebiveisPage)
  },
  {
    path: 'emprestimos',
    loadComponent: () => import('./paginas/emprestimos/emprestimos.page').then( m => m.EmprestimosPage)
  },
  {
    path: '**',
    loadComponent: () => import('./paginas/not-found/not-found.page').then( m => m.NotFoundPage)
  },



];
