import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './shared/header/nav/nav.component';
import { HeaderComponent } from './shared/header/header.component';
import { AdsLineComponent } from './ads-line/ads-line.component';
import { AdsComponent } from './shared/ads/ads.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { CreateAdComponent } from './create-ad/create-ad.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    AdsLineComponent,
    AdsComponent,
    ProfileComponent,
    LoginComponent,
    CreateAdComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatGridListModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
