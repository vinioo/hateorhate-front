import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/pages/login/login.component';

type Theme = 'light' | 'dark';
@Component({
  selector: 'ma-navbar-intern',
  templateUrl: './ma-navbar-intern.component.html',
  styleUrls: ['./ma-navbar-intern.component.scss'],
})
export class MaNavbarInternComponent implements OnInit, AfterViewInit {
  @Output() searchQuery = new EventEmitter();
  query: string;
  theme: Theme = 'dark';
  user: User;

  @ViewChild('userImage') userImage: ElementRef;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    const lsUser = localStorage.getItem('user');
    const lsTheme = localStorage.getItem('theme');

    if (lsUser) this.user = JSON.parse(lsUser);
    if (lsTheme) this.setTheme(lsTheme.toString());
  }

  ngAfterViewInit() {
    if (this.user) {
      this.userImage.nativeElement.style.backgroundImage = `url(${this.user.image.toString()})`;
    }
  }

  onSubmit(form) {
    this.search(form.value.query);
  }

  search(search) {
    this.searchQuery.emit(search);
  }

  toggleTheme() {
    if (!document.documentElement.dataset.theme) {
      this.setDarkTheme();
    } else {
      this.setLightTheme();
    }
  }

  setTheme(theme: string) {
    theme === 'dark' ? this.setDarkTheme() : this.setLightTheme();
  }
  setDarkTheme() {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    this.theme = 'dark';
  }

  setLightTheme() {
    document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('theme', 'light');
    this.theme = 'light';
  }

  logout() {
    this.authService.logout();
  }
}
