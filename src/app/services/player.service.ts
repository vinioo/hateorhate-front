import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  currentSong: HTMLAudioElement;
  isPlaying: boolean;
  playerUrlChange: Subject<string> = new Subject<string>();

  constructor() {
  }

  async play(music: HTMLAudioElement) {
    if (music.src === this?.currentSong?.src) {
      this.currentSong.pause();
      this.currentSong = undefined;
      this.isPlaying = false;
      return false;
    }
    this.currentSong && await this.currentSong.pause();
    this.currentSong = music;
    this.currentSong.play();
    this.currentSong.onended = () => {
      this.isPlaying = false;
    }
    this.isPlaying = true;
    return true;
  }
}
