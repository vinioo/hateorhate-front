import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchPage implements OnInit {

  albums = [];

  constructor(private spotifyService: SpotifyService) { }

  async ngOnInit() {
    const response: any = await this.spotifyService.getAlbums();
    this.albums = response.albums.items;
  }

}
