import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ma-input',
  templateUrl: './ma-input.component.html',
  styleUrls: ['./ma-input.component.scss']
})

export class MaInputComponent implements OnInit {
  @Output() valueChange = new EventEmitter();

  @Input() placeholder: string;
  @Input() size = 'default';
  @Input() name;
  @Input() id;
  @Input() value: any = null;

  constructor() { }

  ngOnInit(): void {
  }



  change(value: any): void {
    this.value = value;
    this.valueChange.emit(this.value);
  }
}
