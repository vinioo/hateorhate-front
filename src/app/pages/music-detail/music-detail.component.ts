import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';
import { RatingService } from 'src/app/services/rating.service';

@Component({
  selector: 'music-detail',
  templateUrl: './music-detail.component.html',
  styleUrls: ['./music-detail.component.scss'],
})
export class MusicDetailPage implements OnInit {
  public song: SpotifyApi.TrackObjectFull | any; // change it
  private songId: string;

  constructor(
    private route: ActivatedRoute,
    private spotifyService: SpotifyService,
    private ratingService: RatingService
  ) {}

  async ngOnInit(): Promise<void> {
    if (history.state.data) {
      this.song = history.state.data;
    } else {
      this.route.params.subscribe((params) => {
        this.songId = params['id'];
      });

      if (this.songId) {
        this.song = await this.spotifyService.getTrackById(this.songId);
      } else {
        return undefined;
      }
    }
  }

  addRating() {
    this.ratingService.setRating(this.song.id).subscribe((data) => console.log(data));
  }
}
