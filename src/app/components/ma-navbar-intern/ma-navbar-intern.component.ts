import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'ma-navbar-intern',
  templateUrl: './ma-navbar-intern.component.html',
  styleUrls: ['./ma-navbar-intern.component.scss']
})
export class MaNavbarInternComponent implements OnInit {
  @Output() searchQuery = new EventEmitter();
  query: string;

  constructor() { }
  ngOnInit(): void {
  }

  onSubmit(form) {
    this.search(form.value.query);
  }

  search(search) {
    this.searchQuery.emit(search);
  }

}
