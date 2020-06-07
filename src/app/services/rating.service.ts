import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { isArray } from 'util';

@Injectable({
  providedIn: 'root',
})
export class RatingService {
  readonly BASE_URL = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {}

  private getRatings(songId: string): any {
    const params = new HttpParams().set('songId', songId);

    return this.httpClient.get(`${this.BASE_URL}/ratings`, { params }).toPromise();
  }

  public setRating({ songId, ratingText, value }) {
    return this.httpClient
      .post(`${this.BASE_URL}/ratings`, {
        songId,
        value,
        userId: Math.floor(Math.random() * 99999),
        ratingText,
      });
  }

  public async getSongRatings(songs) {
    let songsArr = [];
    if (Array.isArray(songs)) {
      songsArr = songs;
    } else {
      songsArr.push(songs);
    }

    const newSongs = [];
    for (const song of songsArr) {
      const response: any[] = await this.getRatings(song.id);

      if (response.length) {
        let averageRating = 0;
        response.map((res) => {
          averageRating += res.value;
        });
        newSongs.push({
          ...song,
          rating: (averageRating / response.length).toFixed(1),
          ratings: response,
        });
      } else {
        newSongs.push(song);
      }
    }

    return newSongs;
  }

  public getTopRatedSongs() {
    const params = new HttpParams().set('_sort', 'value');

    return this.httpClient
    .get(`${this.BASE_URL}/ratings`, { params });
  }
}
