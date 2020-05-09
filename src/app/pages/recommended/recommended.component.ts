import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.scss']
})
export class RecommendedPage implements OnInit {

  constructor(private spotifyService: SpotifyService) { }

  public songs = [];
  public loading: boolean;

  async ngOnInit(): Promise<void> {
    this.loading = true;
    const response: any = await this.spotifyService.getRecommendations();
    this.songs = response.tracks;
    this.loading = false;
  }
}
