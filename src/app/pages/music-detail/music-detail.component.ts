import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'music-detail',
  templateUrl: './music-detail.component.html',
  styleUrls: ['./music-detail.component.scss']
})
export class MusicDetailPage implements OnInit {
  public item ;

  constructor() { }

  ngOnInit(): void {
    if (!history.state.data) {
      // TODO: get song parameter and make request to sportify api
    } else {
      this.item = history.state.data;
    }
  }

}
