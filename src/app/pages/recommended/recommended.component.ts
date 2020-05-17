import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { RatingService } from 'src/app/services/rating.service';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.scss']
})
export class RecommendedPage implements OnInit {

  constructor(private spotifyService: SpotifyService, private ratingService: RatingService) { }

  public songs = [];
  public loading: boolean;
  public notes: {nota:string}[];

  async ngOnInit(): Promise<void> {
    this.loading = true;
    const response: any = await this.spotifyService.getRecommendations();
    this.songs = response.tracks;

    // this.songs.map((song) => {
    //   this.ratingService.getRatings(song.id).subscribe((data) => {});
    // });
    this.loading = false;
  }
}
