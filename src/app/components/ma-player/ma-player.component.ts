import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'ma-player',
  templateUrl: './ma-player.component.html',
  styleUrls: ['./ma-player.component.scss']
})
export class MaPlayerComponent implements OnInit {
  readonly PLAYER_BASE_URL = 'https://open.spotify.com/embed/album/'; 

  constructor(private sanitizer: DomSanitizer, private playerService: PlayerService) { 
  }

  ngOnInit(): void {

  }

  get playerUrl() { 
    if (!this.playerService.playerUrl) {
      return undefined;
    }

    return this.sanitizer.bypassSecurityTrustResourceUrl(this.PLAYER_BASE_URL + this.playerService.playerUrl);
  }

  closePlayer() {
    return false;
  }

  set playerUrl(value) {
    this.playerUrl = value;
  }
}
