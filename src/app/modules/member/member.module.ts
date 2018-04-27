import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { MemberRoutingModule } from './member-routing.module';

import { MemberComponent } from '../../components/member/member.component';

@NgModule({
  declarations: [MemberComponent],
  imports: [CommonModule, FormsModule, ClarityModule, MemberRoutingModule],
  providers: []
})
export class MemberModule {}
