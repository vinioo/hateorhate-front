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
    this.currentSong && await this.currentSong.pause();
    this.currentSong = music;
    this.currentSong.play();
  }
}
