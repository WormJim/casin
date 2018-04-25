import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './components/landing/landing.component';
import { PageNotFoundComponent } from './not-found.component';

const appRoutes: Routes = [
  { path: 'not-found', component: PageNotFoundComponent },
  {
    path: 'shop',
    loadChildren: 'app/modules/shop/shop.module#ShopModule'
  },
  {
    path: '',
    loadChildren: './modules/landing/landing.module#LandingModule'
    // redirectTo: '/landing',
    // pathMatch: 'full'
  },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
