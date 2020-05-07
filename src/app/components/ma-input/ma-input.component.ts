import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ma-input',
  templateUrl: './ma-input.component.html',
  styleUrls: ['./ma-input.component.scss']
})

export class MaInputComponent implements OnInit {
  @Input() placeholder: string;
  @Input() size = 'default';
  @Input() name;
  @Input() id;
  // @Input() modelName;

  constructor() { }

  ngOnInit(): void {
  }

}
