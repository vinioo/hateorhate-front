import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private _accessToken;
  private generalHeaders;

  set accessToken(token: string) {
    this.generalHeaders = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token
      })
    }
  }

  get accessToken() {
    return this._accessToken;
  }


  authorizationHeaders = {
    headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': `Basic MWMzM2ZmYTkyOWNmNDAwNTlkM2YxMzA4MjY4ZmQ4MTc6OWQ3MGU0MzA0MjEyNDkxY2I2Y2U1NTVlYWMxYjgwMzY=`
  }) 
}
  

  private body = new HttpParams().set('grant_type', 'client_credentials');

  constructor(private httpClient: HttpClient) { }
  public async authorize() {
    const response = await this.httpClient.post('https://cors-anywhere.herokuapp.com/https://accounts.spotify.com/api/token', this.body, this.authorizationHeaders).toPromise();

    this.accessToken = response['access_token'];
  }

  public async getAlbums() {
    console.log('antes');
    await this.authorize();
    console.log(this.generalHeaders)
    return this.httpClient.get('https://cors-anywhere.herokuapp.com/https://api.spotify.com/v1/browse/new-releases', this.generalHeaders).toPromise();
  }
}
