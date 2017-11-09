import { Http } from '@angular/http';
import { LibrosService } from './../../services/libros.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-google',
  templateUrl: './lista-google.component.html',
  styleUrls: ['./lista-google.component.css']
})
export class ListaGoogleComponent implements OnInit {

  sURL: string;
  aLibros: Array<string>;
  sClave: string;

  constructor(public http: Http) { }

  ngOnInit() {
    this.sURL = 'https://www.googleapis.com/books/v1/volumes?q=intitle:';
    this.aLibros = [];
  }

  buscar() {

  }
}
