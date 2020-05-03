import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouteRoutingModule } from './route/route-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MaButtonComponent } from './components/ma-button/ma-button.component';
import { MaCardComponent } from './components/ma-card/ma-card.component';
import { MaImageLabelComponent } from './components/ma-image-label/ma-image-label.component';
import { MaFooterComponent } from './components/ma-footer/ma-footer.component';
import { MaNavbarComponent } from './components/ma-navbar/ma-navbar.component';
import { SearchPage } from './pages/search/search.component';
import { MusicItemComponent } from './components/ma-music-item/music-item.component';
import { HomePage } from './pages/home/home.component';
import { RecommendedPage } from './pages/recommended/recommended.component';
import { LoginPage } from './pages/login/login.component';
import { MaInputComponent } from './components/ma-input/ma-input.component';
import { MaPlayerComponent } from './components/ma-player/ma-player.component';
import { MaLineComponent } from './components/ma-line/ma-line.component';
import { MaNavbarInternComponent } from './components/ma-navbar-intern/ma-navbar-intern.component';
import { MaAlbumItemComponent } from './components/ma-album-item/ma-album-item.component';
import { MaArtistItemComponent } from './components/ma-artist-item/ma-artist-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MaButtonComponent,
    MaCardComponent,
    MaImageLabelComponent,
    MaFooterComponent,
    MaNavbarComponent,
    SearchPage,
    MusicItemComponent,
    HomePage,
    MaButtonComponent,
    RecommendedPage,
    LoginPage,
    MaInputComponent,
    MaPlayerComponent,
    MaLineComponent,
    MaNavbarInternComponent,
    MaAlbumItemComponent,
    MaArtistItemComponent
  ],
  imports: [
    BrowserModule,
    RouteRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
