import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  clientId = '1c33ffa929cf40059d3f1308268fd817';
  secret = '9d70e4304212491cb6ce555eac1b8036';
  url = '';

  constructor(private HttpClient: HttpClient) { }

    // Headers
    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }

      // Obtem todos os carros
  // getCars(): Observable {
  //   return this.httpClient.get(this.url)
  //     .pipe(
  //       retry(2),
  //       catchError(this.handleError))
  // }

    // Manipulação de erros
    // handleError(error: HttpErrorResponse) {
    //   let errorMessage = '';
    //   if (error.error instanceof ErrorEvent) {
    //     // Erro ocorreu no lado do client
    //     errorMessage = error.error.message;
    //   } else {
    //     // Erro ocorreu no lado do servidor
    //     errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    //   }
    //   console.log(errorMessage);
    //   return throwError(errorMessage);
    // };
}
