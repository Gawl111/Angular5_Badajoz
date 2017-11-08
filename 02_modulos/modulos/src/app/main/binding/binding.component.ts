import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  nombre: string;
  number: number;
  isSpanish: boolean;

  constructor() { }

  ngOnInit() {
    this.nombre = 'Pepe';
    this.number = 7;
  }
  btnBorrar() {
    this.nombre = '';
  }

}
