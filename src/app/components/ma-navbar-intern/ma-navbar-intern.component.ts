import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'ma-navbar-intern',
  templateUrl: './ma-navbar-intern.component.html',
  styleUrls: ['./ma-navbar-intern.component.scss'],
})
export class MaNavbarInternComponent implements OnInit {
  @Output() searchQuery = new EventEmitter();
  query: string;
  theme: string = 'dark';

  constructor(private authService: AuthService) {}
  ngOnInit(): void {}

  onSubmit(form) {
    this.search(form.value.query);
  }

  search(search) {
    this.searchQuery.emit(search);
  }

  toggleTheme() {
    if (!document.documentElement.dataset.theme) {
      document.documentElement.setAttribute('data-theme', 'dark');
      this.theme = 'dark';
    } else {
      document.documentElement.removeAttribute('data-theme');
      this.theme = 'light';
    }
  }
}
