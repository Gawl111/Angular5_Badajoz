import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  sNombre: string;
  nNumber: number;
  nPrecio: number;
  oLibro: {autor: string; libro: string};
  dFecha: Date;

  constructor() { }

  ngOnInit() {
    this.sNombre = 'Pepe perez';
    this.nNumber = 24.7;
    this.nPrecio = 23;
    this.oLibro = {autor: 'Cervantes', libro: 'El Quijote'};
    this.dFecha = new Date;
  }

}
