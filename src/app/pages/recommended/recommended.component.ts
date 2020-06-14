import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { RatingService } from 'src/app/services/rating.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.scss'],
})
export class RecommendedPage implements OnInit {
  constructor(private spotifyService: SpotifyService, private ratingService: RatingService, private router: Router) {}

  public songs = [];
  public loading: boolean;
  public topSongs = [];

  async ngOnInit(): Promise<void> {
    try {
      this.loading = true;
      const recommendations: any = await this.spotifyService.getRecommendations();
      this.songs = await this.ratingService.getSongRatings(recommendations.tracks);
      this.setTopRatedSongs();
    } catch (err) {
      console.error(err);
    } finally {
      this.loading = false;
    }
  }

  private setTopRatedSongs() {
    this.ratingService.getTopRatedSongs().subscribe(async (res: []) => {
      const songIds = (res as any).map((song) => song.songId);
      const uniqueIds = [...new Set(songIds)];
      const topRated: any = await this.spotifyService.getTrackById(uniqueIds.slice(0, 6).toString());
      this.topSongs = await this.ratingService.getSongRatings(topRated.tracks);
    });
  }

  public goToSearch($event) {
    this.router.navigate(['/search'], { queryParams: { q: $event } });
  }
}
