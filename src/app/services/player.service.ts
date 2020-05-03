import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  playerUrl: string;
  playerUrlChange: Subject<string> = new Subject<string>();

  constructor() { 
    this.playerUrlChange.subscribe((value) => {
      this.playerUrl = value;
    });

  }
  
  public setPlayerUrl(url: string) {
    this.playerUrlChange.next(url);
  }

}
