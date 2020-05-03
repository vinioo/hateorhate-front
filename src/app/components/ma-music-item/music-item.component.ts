import { Component, OnInit, Input } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'ma-music-item',
  templateUrl: './music-item.component.html',
  styleUrls: ['./music-item.component.scss']
})
export class MusicItemComponent implements OnInit {
  @Input() item;

  open: boolean;
  playing: boolean;
  music: HTMLAudioElement;

  constructor(private playerService: PlayerService) {
  }

  ngOnInit(): void {
  }

  async togglePlayer() {
    this.music = new Audio(this.item?.preview_url);
    this.playerService.play(this.music);
    // if (this.playing) {
    //   this.playing = false;
    //   await this.music.pause();
    // } else {
    //   if (this.music) {
    //     this.playing = true;
    //     await this.music.play();
    //   }
    // }
  }

}
