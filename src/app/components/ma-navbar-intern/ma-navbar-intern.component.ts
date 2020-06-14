import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/pages/login/login.component';

@Component({
  selector: 'ma-navbar-intern',
  templateUrl: './ma-navbar-intern.component.html',
  styleUrls: ['./ma-navbar-intern.component.scss'],
})
export class MaNavbarInternComponent implements OnInit, AfterViewInit {
  @Output() searchQuery = new EventEmitter();
  query: string;
  theme: string = 'dark';
  user: User;

  @ViewChild('userImage') userImage: ElementRef;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    const user = localStorage.getItem('user');

    if (user) this.user = JSON.parse(user);
  }
  
  ngAfterViewInit() {
    this.userImage.nativeElement.style.backgroundImage = `url(${this.user.image.toString()})`;
  }

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

  logout() {
    this.authService.logout();
  }
}
