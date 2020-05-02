import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.scss']
})
export class RecommendedPage implements OnInit {

  constructor(private spotifyService: SpotifyService) { }

  songs = [];

  async ngOnInit(): Promise<void> {
    const response: any = await this.spotifyService.getSongs();
    this.songs = response.tracks;

  }
}
