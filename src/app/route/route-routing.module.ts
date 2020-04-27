import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchPage } from '../pages/search/search.component';
import { HomePage } from '../pages/home/home.component';
import { LoginPage } from '../pages/login/login.component';

import { MaNavbarComponent } from '../components/ma-navbar/ma-navbar.component';
import { MaCardComponent } from '../components/ma-card/ma-card.component';
import { MaFooterComponent } from '../components/ma-footer/ma-footer.component';

 
const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'search', component: SearchPage },
  { path: 'login', component: LoginPage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouteRoutingModule { }
