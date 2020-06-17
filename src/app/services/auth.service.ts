import { Injectable, OnInit, OnChanges } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnChanges {
  readonly BASE_URL = 'http://localhost:3000';

  loggedUser: {
    id: number,
    username: string,
    email: string,
    image: string;
  };

  constructor(private httpClient: HttpClient, private route: Router) {}
  
  ngOnChanges() {
    this.loggedUser = localStorage.get('user');
      if (!this.loggedUser) {
        // this.logout()
      }
  }

  public getUser(user) {
    const params = new HttpParams().set('email', user.email);

    return this.httpClient.get(`${this.BASE_URL}/user`, { params });
  }

  public newUser(user) {
    return this.httpClient.post(`${this.BASE_URL}/user`, user);
  }

  public logout() {
    localStorage.removeItem('user');
    this.route.navigate(['/']);
  }
}
