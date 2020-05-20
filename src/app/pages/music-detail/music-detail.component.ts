import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';
import { RatingService } from 'src/app/services/rating.service';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'music-detail',
  templateUrl: './music-detail.component.html',
  styleUrls: ['./music-detail.component.scss'],
})
export class MusicDetailPage implements OnInit {
  public song: SpotifyApi.TrackObjectFull | any; // change it
  private songId: string;
  public ratingText: string;
  private rating: number;

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
        const song = await this.ratingService.getSongRatings(await this.spotifyService.getTrackById(this.songId));
        this.song = song[0];
        console.log(this.song);
      } else {
        return undefined;
      }
    }
  }

  setRating(rating) {
    this.rating = Number(rating.value.trim());
  }

  async onSubmit(form) {
    try {
      await this.ratingService.setRating({
        value: this.rating,
        songId: this.song.id,
        ratingText: form.value.ratingText,
      });

      const toast = document.createElement('bds-toast');
      document.querySelector('bds-toast-container').shadowRoot.appendChild(toast);
      toast.create({
        variant: 'success',
        toastText: 'Rating added!',
        toastTitle: 'Uhuul! We have received your rating',
        duration: 5,
        actionType: 'icon'
      });
    } catch (err) {}
  }
}
