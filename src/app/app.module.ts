import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaButtonComponent } from './ma-button/ma-button.component';
import { MaCardComponent } from './ma-card/ma-card.component';
import { MaImageLabelComponent } from './ma-image-label/ma-image-label.component';

@NgModule({
  declarations: [
    AppComponent,
    MaButtonComponent,
    MaCardComponent,
    MaImageLabelComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
