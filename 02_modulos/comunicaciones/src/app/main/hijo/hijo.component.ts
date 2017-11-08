import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input() miNombre: string;
  @Output() recibido: EventEmitter<string>;
  nombreFav: string;

  constructor() {
    this.recibido = new EventEmitter();
  }

  ngOnInit() {
  }
  btnEventos() {
    this.recibido.emit(this.nombreFav);
  }

}
