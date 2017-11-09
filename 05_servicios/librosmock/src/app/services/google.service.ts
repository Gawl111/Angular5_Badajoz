import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/Rx';

@Injectable()
export class GoogleService {

  sURL: string;

  constructor(public http: Http) {
    this.sURL = 'https://www.googleapis.com/books/v1/volumes?q=intitle:';
  }

  buscarLibros(clave: string) {
    return this.http.get(this.sURL + clave).map(
      response => this.extracTitles(response),
      error => console.log(error)
    );
  }

  private extracTitles(response: Response) {
    return response.json().items.map(
      book => book.volumeInfo.title
    );
  }
}
