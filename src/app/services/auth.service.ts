import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly BASE_URL = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {}

  public getUser(user) {
    const params = new HttpParams().set('email', user.email);

    return this.httpClient.get(`${this.BASE_URL}/user`, { params });
  }

  public newUser(user) {
    return this.httpClient.post(`${this.BASE_URL}/user`, user);
  }
}