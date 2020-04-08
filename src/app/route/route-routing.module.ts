import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaNavbarComponent } from '../ma-navbar/ma-navbar.component';
import { MaCardComponent } from '../ma-card/ma-card.component';
import { MaButtonComponent } from '../ma-button/ma-button.component';
import { MaFooterComponent } from '../ma-footer/ma-footer.component';

 
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
