import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LandingRoutingModule } from './landing-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HomeComponent } from '../../components/landing/home/home.component';
import { AboutComponent } from '../../components/landing/about/about.component';
import { MissionComponent } from '../../components/landing/mission/mission.component';
import { ContactComponent } from '../../components/landing/contact/contact.component';
import { TeamComponent } from '../../components/landing/team/team.component';
import { FooterComponent } from '../../components/landing/footer/footer.component';
import { HeaderComponent } from '../../components/landing/header/header.component';
import { LandingComponent } from '../../components/landing/landing.component';
import { ClarityModule } from '@clr/angular';
import { NavComponent } from '../../components/landing/nav/nav.component';
import { NewsComponent } from '../../components/landing/news/news.component';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { SiteContentService } from '../../services/site-content.service';
import { BaseComponent } from '../../components/landing/base/base.component';

library.add(faTwitter, faFacebook, faFacebookF, faLinkedin, faLinkedinIn);

@NgModule({
  declarations: [
    LandingComponent,
    HomeComponent,
    AboutComponent,
    MissionComponent,
    ContactComponent,
    TeamComponent,
    FooterComponent,
    NewsComponent,
    HeaderComponent,
    NavComponent,
    BaseComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ClarityModule,
    FontAwesomeModule,
    LandingRoutingModule
  ],
  providers: [SiteContentService]
})
export class LandingModule {}
