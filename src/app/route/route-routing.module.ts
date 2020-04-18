import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaNavbarComponent } from '../components/ma-navbar/ma-navbar.component';
import { MaCardComponent } from '../components/ma-card/ma-card.component';
import { MaButtonComponent } from '../components/ma-button/ma-button.component';
import { MaFooterComponent } from '../components/ma-footer/ma-footer.component';

 
const routes: Routes = [
  { path: '', component: MaButtonComponent },
  { path: 'sobre', component: MaCardComponent},
  { path: 'ajuda', component: MaFooterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouteRoutingModule { }
