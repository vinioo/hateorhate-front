import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RatingService {
  readonly BASE_URL = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {}

  public getRatings(songId: string) {
    const params = new HttpParams().set('songId', songId);

    return this.httpClient.get(`${this.BASE_URL}/ratings`, { params });
  }

  public setRating(songId) {
    return this.httpClient.post(`${this.BASE_URL}/ratings`, {
      id: Math.floor(Math.random() * 99999),
      songId,
      value: 9,
      userId: Math.floor(Math.random() * 99999),
    });
  }
}
