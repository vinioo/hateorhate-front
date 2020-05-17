import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

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

  public setRating({songId, ratingText}) {
    return this.httpClient.post(`${this.BASE_URL}/ratings`, {
      songId,
      value: Math.floor(Math.random() * 10).toFixed(2),
      userId: Math.floor(Math.random() * 99999),
      ratingText,
    }).toPromise();
  }

  getSongRatings = async (songs) => {
    const newSongs = [];
    for (const song of songs) {
      const response: any[] = await this.getRatings(song.id);

      if (response.length) {
        let averageRating = 0;
        response.map((res) => {
          averageRating += res.value;
        });
        newSongs.push({
          ...song,
          rating: (averageRating / response.length).toFixed(1),
        });
      } else {
        newSongs.push(song);
      }
    }

    return newSongs;
  };
}
