import { Component, OnInit, OnChanges } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { RatingService } from 'src/app/services/rating.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchPage implements OnInit, OnChanges {
  public search = 'Strokes';
  public albums = [];
  public artists = [];
  public tracks = [];
  public loading: boolean;

  constructor(private spotifyService: SpotifyService, private ratingService: RatingService) {}

  async ngOnInit() {
    this.loading = true;
    const response: any = await this.spotifyService.search(this.search);
    this.albums = response.albums.items;
    this.artists = response.artists.items;
    this.tracks = await this.ratingService.getSongRatings(response.tracks.items);
    this.loading = false;
  }

  ngOnChanges() {
    alert('oie');
  }

  async getSearchQuery($event) {
    this.search = $event;
    const response: any = await this.spotifyService.search($event);
    this.tracks = response.tracks.items;
    this.albums = response.albums.items;
    this.artists = response.artists.items;
  }
}
