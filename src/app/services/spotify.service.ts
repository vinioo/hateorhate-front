import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  private _accessToken;
  private generalHeaders;

  set accessToken(token: string) {
    this.generalHeaders = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token,
      }),
    };
  }

  get accessToken() {
    return this._accessToken;
  }

  authorizationHeaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic MWMzM2ZmYTkyOWNmNDAwNTlkM2YxMzA4MjY4ZmQ4MTc6OWQ3MGU0MzA0MjEyNDkxY2I2Y2U1NTVlYWMxYjgwMzY=`,
    }),
  };

  private body = new HttpParams().set('grant_type', 'client_credentials');

  constructor(private httpClient: HttpClient) {}
  public async authorize() {
    try {
      const response = await this.httpClient
        .post('https://accounts.spotify.com/api/token', this.body, this.authorizationHeaders)
        .toPromise();

      this.accessToken = response['access_token'];
    } catch (err) {
      console.error(err);
    }
  }

  public async getAlbums() {
    try {
      await this.authorize();
      return this.httpClient.get('https://api.spotify.com/v1/browse/new-releases', this.generalHeaders).toPromise();
    } catch (err) {
      console.error(err);
    }
  }

  public async getSongs(songs?: string[]) {
    try {
      await this.authorize();

      const params = new HttpParams()
      .set('market', 'ES');

      return this.httpClient
        .get('https://api.spotify.com/v1/tracks/3n3Ppam7vgaVa1iaRUc9Lp', { ...this.generalHeaders, params })
        .toPromise();
    } catch (err) {
      console.error(err);
    }
  }

  public async search(search?: string) {
    try {
      await this.authorize();

      const params = new HttpParams()
        .set('q', 'the killers')
        .set('type', 'track,artist,album')
        .set('limit', '6')
        .set('market', 'BR');

      return this.httpClient.get('https://api.spotify.com/v1/search', { ...this.generalHeaders, params }).toPromise();
    } catch (err) {
      console.error(err);
    }
  }
}
