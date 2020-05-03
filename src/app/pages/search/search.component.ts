import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchPage implements OnInit {

  albums = [];
  artists = [];
  tracks = [];

  constructor(private spotifyService: SpotifyService) { }

  async ngOnInit() {
    const response: any = await this.spotifyService.search();
    this.tracks = response.tracks.items;
    this.albums = response.albums.items;
    this.artists = response.artists.items;
  }

}
