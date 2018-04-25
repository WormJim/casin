import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../../components/landing/home/home.component';
import { AboutComponent } from '../../components/landing/about/about.component';
import { TeamComponent } from '../../components/landing/team/team.component';
import { ContactComponent } from '../../components/landing/contact/contact.component';
import { LandingComponent } from '../../components/landing/landing.component';
import { MissionComponent } from '../../components/landing/mission/mission.component';
import { NewsComponent } from '../../components/landing/news/news.component';

const landingRoutes: Routes = [
  {
    path: '',
    component: LandingComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'news', component: NewsComponent },
      { path: 'mission', component: MissionComponent },
      { path: 'team', component: TeamComponent },
      { path: 'journal', redirectTo: '/shop' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(landingRoutes)],
  exports: [RouterModule]
})
export class LandingRoutingModule {}
