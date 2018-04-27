import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ShopComponent } from '../../components/shop/shop.component';
import { JournalComponent } from '../../components/shop/journal/journal.component';
import { JournalDetailComponent } from '../../components/shop/journal/journal-detail/journal-detail.component';

const shopRoutes: Routes = [
  { path: 'shop', component: ShopComponent },
  { path: 'journal', component: JournalComponent },
  { path: 'journal:id', component: JournalDetailComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(shopRoutes)],
  exports: [RouterModule]
})
export class ShopRoutingModule {}
