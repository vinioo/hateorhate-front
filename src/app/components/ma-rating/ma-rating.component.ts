import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ma-rating',
  templateUrl: './ma-rating.component.html',
  styleUrls: ['./ma-rating.component.scss'],
})
export class MaRatingComponent implements OnInit {
  @Output() ratingClicked = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  setRating(ev) {
    Array.from(ev.target.parentElement.children).forEach((sib: HTMLElement) => sib.classList.remove('active'));
    ev.target.classList.add('active');
    this.ratingClicked.emit({ value: ev.target.textContent });
  }
}
