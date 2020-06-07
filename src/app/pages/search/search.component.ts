import { Component, OnInit, OnChanges } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { RatingService } from 'src/app/services/rating.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchPage implements OnInit, OnChanges {
  public searchContent = 'Strokes';
  public albums = [];
  public artists = [];
  public tracks = [];
  public loading: boolean;

  constructor(
    private spotifyService: SpotifyService,
    private ratingService: RatingService,
    private route: ActivatedRoute
  ) {}

  async ngOnInit() {
    try {
      this.loading = true;
      this.route.queryParams.subscribe(async (params) => {
        if (params['q']) {
          this.searchContent = params['q'];
          await this.search(this.searchContent);
        } else {
          this.searchContent = '';
        }
      });
      this.loading = false;
    } catch (err) {
      console.error(err);
    } finally {
      this.loading = false;
    }
  }

  ngOnChanges() {
    alert('oie');
  }

  async getSearchQuery($event) {
    this.searchContent = $event;
    this.search(this.searchContent);
  }

  private async search(query: string) {
    const response: any = await this.spotifyService.search(query);
    this.tracks = response.tracks.items;
    this.albums = response.albums.items;
    this.artists = response.artists.items;
  }
}
