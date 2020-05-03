import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ma-album-item',
  templateUrl: './ma-album-item.component.html',
  styleUrls: ['./ma-album-item.component.scss']
})
export class MaAlbumItemComponent implements OnInit {
  @Input() item;

  constructor() { }

  ngOnInit(): void {
  }

}
