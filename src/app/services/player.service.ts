import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  currentSong: HTMLAudioElement;

  constructor() {
  }

  async play(music: HTMLAudioElement) {
    if (music.src === this?.currentSong?.src) {
      this.currentSong.pause();
      this.currentSong = undefined;
      return this.currentSong;
    }
    this.currentSong && await this.currentSong.pause();
    this.currentSong = music;
    this.currentSong.play();
    return this.currentSong;
  }
}
