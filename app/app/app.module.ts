import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ClarityModule } from '@clr/angular';
import { LandingModule } from './modules/landing/landing.module';
import { ShopModule } from './modules/shop/shop.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AuthComponent } from './components/auth/auth.component';
import { PageNotFoundComponent } from './not-found.component';
import { LandingRoutingModule } from './modules/landing/landing-routing.module';
import { ShopRoutingModule } from './modules/shop/shop-routing.module';
import { Router } from '@angular/router';

@NgModule({
  declarations: [AppComponent, AuthComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    ClarityModule,
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
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
