import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabeza',
  templateUrl: './cabeza.component.html',
  styleUrls: ['./cabeza.component.css']
})
export class CabezaComponent implements OnInit {

  public title: string;

  constructor() { }

  ngOnInit() {
    this.title = 'Uso de Módulos';
  }

}
