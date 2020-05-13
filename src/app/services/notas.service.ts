import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotasService {

  constructor() { }

  nota: {nota:string}[] = [

    {
      nota: "8.5"
    },

    {
      nota: "9.3"
    },

    {
      nota: "7.6"
    },

    {
      nota: "4.2"
    },

    {
      nota: "3.4"
    },

    {
      nota: "6.7"
    }
  ];

  notas(): {nota:string}[] {
    return this.nota;
  }
}
