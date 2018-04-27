import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MemberComponent } from '../../components/member/member.component';

const memberRoutes: Routes = [
  {
    path: 'members',
    component: MemberComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(memberRoutes)],
  exports: [RouterModule]
})
export class MemberRoutingModule {}
