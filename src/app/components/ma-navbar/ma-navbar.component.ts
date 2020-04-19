import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ma-navbar',
  templateUrl: './ma-navbar.component.html',
  styleUrls: ['./ma-navbar.component.scss']
})
export class MaNavbarComponent implements OnInit {
  public theme: string = 'light';

  constructor() { }

  async ngOnInit() {
  }

  toggleTheme() {
    if (!document.documentElement.dataset.theme) {
      document.documentElement.setAttribute('data-theme', 'dark')
      this.theme = 'dark';
    } else {
      document.documentElement.removeAttribute('data-theme')
      this.theme = 'light';
    }
  }

}
