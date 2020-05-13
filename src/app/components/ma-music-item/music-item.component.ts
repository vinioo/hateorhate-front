import { Component, OnInit, Input } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';
import { NotasService } from 'src/app/services/notas.service';

@Component({
  selector: 'ma-music-item',
  templateUrl: './music-item.component.html',
  styleUrls: ['./music-item.component.scss']
})
export class MusicItemComponent implements OnInit {
  @Input() song;

  open: boolean;
  playing: boolean;
  music: HTMLAudioElement;


  constructor(private playerService: PlayerService) {
  }

  ngOnInit(): void {
    
  }

  async togglePlayer() {
    this.music = new Audio(this.song?.preview_url);
    this.playerService.play(this.music);
  }

}
