import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { ShopRoutingModule } from './shop-routing.module';

import { ShopService } from '../../services/shop.service';

import { JournalComponent } from '../../components/shop/journal/journal.component';
import { JournalDetailComponent } from '../../components/shop/journal/journal-detail/journal-detail.component';
import { ShopComponent } from '../../components/shop/shop.component';

@NgModule({
  declarations: [ShopComponent, JournalComponent, JournalDetailComponent],
  imports: [CommonModule, FormsModule, ClarityModule, ShopRoutingModule],
  providers: [ShopService]
})
export class ShopModule {}
