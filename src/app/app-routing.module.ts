import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdsLineComponent } from './ads-line/ads-line.component';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { HeaderComponent } from './shared/header/header.component';

const routes: Routes = [
  { path: '', component: AdsLineComponent },
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
