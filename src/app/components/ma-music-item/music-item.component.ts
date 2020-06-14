import { Component, OnInit, Input } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'ma-music-item',
  templateUrl: './music-item.component.html',
  styleUrls: ['./music-item.component.scss']
})
export class MusicItemComponent implements OnInit {
  @Input() song;

  open: boolean;
  playing: boolean;
  currentSong: HTMLAudioElement;


  constructor(private playerService: PlayerService, private toastService: ToastService) {
  }

  ngOnInit(): void {
  }

  async togglePlayer() {
    if (this.song.preview_url) {
      this.currentSong = await this.playerService.play(new Audio(this.song?.preview_url));
      this.playing = true;
      this.addCurrentSongListeners();
    } else {
      this.toastService.open({
        duration: 10,
        variant: 'error',
        toastTitle: 'We cant play this song right now',
        toastText: 'Sorry! This song is not avaiable in your region',
        actionType: 'icon'
      });
    }
  }

  addCurrentSongListeners() {
    this.currentSong.onpause = () => {
      this.playing = false;
    }
    this.currentSong.onended = () => {
      this.playing = false;
    }
  }

}
