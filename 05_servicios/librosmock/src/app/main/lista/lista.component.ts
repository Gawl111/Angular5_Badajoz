import { LibrosService } from './../../services/libros.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  aLibros: Array<string>;
  sClave: string;

  constructor(public librosService: LibrosService) { }

  ngOnInit() {
    this.aLibros = [];
  }

  buscar() {
    this.librosService.buscarLibrosAsync(this.sClave)
    .then(JSON.parse)
    .then(
      (response) => {
        this.aLibros = response;
      }, //funcion que se ejecuta en caso de acierto
      (error) => {
        console.log(error);
      } //funcion que se ejecuta cuando la promise va mal
    );
  }

}
