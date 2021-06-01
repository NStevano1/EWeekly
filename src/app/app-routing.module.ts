import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'days',
    loadChildren: () => import('./pages/days/days.module').then( m => m.DaysModule)
  },
  { path: 'day/:id',
  //component: ProductDetails },
  loadChildren: () => import('./pages/day/day.module').then( m => m.DayModule)
  },
  { path: 'event/:id',
  //component: ProductDetails },
  loadChildren: () => import('./pages/event/event.module').then( m => m.EventModule)
  },
  {
    path: 'contacts',
    loadChildren: () => import('./pages/contacts/contacts.module').then( m => m.ContactsModule)
  },
  { path: 'contact/:id',
  loadChildren: () => import('./pages/contact/contact.module').then( m => m.ContactModule)
  },
  {
    path: 'documents',
    loadChildren: () => import('./pages/documents/documents.module').then( m => m.DocumentsModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
