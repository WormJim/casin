import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { ClarityModule } from '@clr/angular';
import { LandingModule } from './modules/landing/landing.module';
import { ShopModule } from './modules/shop/shop.module';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { AuthComponent } from './components/auth/auth.component';
import { PageNotFoundComponent } from './not-found.component';
import { LandingRoutingModule } from './modules/landing/landing-routing.module';
import { ShopRoutingModule } from './modules/shop/shop-routing.module';
import { Router } from '@angular/router';
import { environment } from '../environments/environment.prod';

@NgModule({
  declarations: [AppComponent, AuthComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    ClarityModule,
    AngularFireModule.initializeApp(environment.firebase, 'casin'),
    AngularFirestoreModule,
    AngularFireStorageModule,
    LandingModule,
    ShopModule,
    LandingRoutingModule,
    ShopRoutingModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    // console.log('Routes: ', JSON.stringify(router.config, undefined, 2)); // Uncomment to see route path
  }
}
