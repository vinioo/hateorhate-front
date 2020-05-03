import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchPage implements OnInit {

  albums = [];

  constructor(private spotifyService: SpotifyService) { }

  async ngOnInit() {
    const response: any = await this.spotifyService.getAlbums();
    this.albums = response.albums.items;

    const musica = new Audio('https://open.spotify.com/track/7oK9VyNzrYvRFo7nQEYkWN');
    await musica.play();
  }

}
