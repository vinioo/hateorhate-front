import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ma-input',
  templateUrl: './ma-input.component.html',
  styleUrls: ['./ma-input.component.scss']
})

export class MaInputComponent implements OnInit {
  @Input() placeholder: string;
  @Input() size: string = 'default';

  constructor() { }

  ngOnInit(): void {
  }

}
