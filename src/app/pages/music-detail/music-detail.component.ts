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
        this.songId = params.id;
      });
    }
    this.getList();
    return;
  }

  setRating(rating) {
    this.rating = Number(rating.value.trim());
  }

  async onSubmit(form) {
    try {
      await this.ratingService
        .setRating({
          value: this.rating,
          songId: this.song.id,
          ratingText: form.value.ratingText,
        })
        .subscribe(() => {
          this.getList();
        });

      const toast = document.createElement('bds-toast');
      document.body.appendChild(toast);

      toast.create({
        variant: 'success',
        toastText: 'Rating added!',
        toastTitle: 'Uhuul! We have received your rating',
        duration: 5,
        actionType: 'icon',
      });
    } catch (err) {}
  }

  async getList() {
    const song: any = !this.song && (await this.spotifyService.getTrackById(this.songId));

    const songRatings = await this.ratingService.getSongRatings(song?.tracks || this.song);

    this.song = songRatings[0] ?? songRatings[0]?.tracks[0];
  }

  public back() {
    window.history.back();
  }
}
