import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ma-button',
  templateUrl: './ma-button.component.html',
  styleUrls: ['./ma-button.component.scss']
})
export class MaButtonComponent implements OnInit {
  @Input() variant: string;
  constructor() { }

  ngOnInit(): void {
  }

}
