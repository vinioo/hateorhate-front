import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ma-big-music',
  templateUrl: './ma-big-music.component.html',
  styleUrls: ['./ma-big-music.component.scss']
})
export class MaBigMusicComponent implements OnInit {
  @Input() imageSrc: string;

  constructor() { }

  ngOnInit(): void {
  }

}
