import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ma-artist-item',
  templateUrl: './ma-artist-item.component.html',
  styleUrls: ['./ma-artist-item.component.scss']
})
export class MaArtistItemComponent implements OnInit {
  @Input() item;

  constructor() { }

  ngOnInit(): void {
  }

}
