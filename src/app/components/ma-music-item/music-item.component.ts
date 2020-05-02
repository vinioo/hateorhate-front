import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ma-music-item',
  templateUrl: './music-item.component.html',
  styleUrls: ['./music-item.component.scss']
})
export class MusicItemComponent implements OnInit {
  @Input() item;

  open: boolean;

  constructor() {
  }
  
  ngOnInit(): void {
  }

  openPlayer() {
    this.open = true;
  }

}
