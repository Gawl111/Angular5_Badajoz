import { Injectable } from '@angular/core';

@Injectable()
export class LibrosService {

  aLibros: Array<string>;

  constructor() {
    this.aLibros = [
      'Angular básico',
      'Aprende Angular',
      'Angular en 30 minutos',
      'Angular Avanzado'
    ];
   }

  buscarLibros(clave: string) {
    return this.aLibros;
  }
}
