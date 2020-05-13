import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { NotasService } from 'src/app/services/notas.service';


@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.scss']
})
export class RecommendedPage implements OnInit {

  constructor(private spotifyService: SpotifyService, private notasService: NotasService) { }

  public songs = [];
  public loading: boolean;
  public notes: {nota:string}[];

  async ngOnInit(): Promise<void> {
    this.loading = true;
    const response: any = await this.spotifyService.getRecommendations();
    this.songs = response.tracks;
    this.loading = false;
    this.notes = this.notasService.notas();
    this.songs = this.songs.map((song, index)=>{
      return{
        note: this.notes[index].nota, 
        ...song
      }

    })
  }
}
