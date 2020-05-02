import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'ma-player',
  templateUrl: './ma-player.component.html',
  styleUrls: ['./ma-player.component.scss']
})
export class MaPlayerComponent implements OnInit {
  @Input() albumId;

  readonly url = 'https://open.spotify.com/embed/album/';

  albumUrl;



  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.albumUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url + this.albumId);
  }

}
