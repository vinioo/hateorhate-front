import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchPage implements OnInit {
  public search = 'Strokes';
  public albums = [];
  public artists = [];
  public tracks = [];
  public loading: boolean;

  constructor(private spotifyService: SpotifyService) { }

  async ngOnInit() {
    this.loading = true;
    const response: any = await this.spotifyService.search(this.search);
    this.tracks = response.tracks.items;
    this.albums = response.albums.items;
    this.artists = response.artists.items;
    this.loading = false;
  }

  async getSearchQuery($event) {
    this.search = $event;
    const response: any = await this.spotifyService.search($event);
    this.tracks = response.tracks.items;
    this.albums = response.albums.items;
    this.artists = response.artists.items;
  }

}
