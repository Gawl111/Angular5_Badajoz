import { GoogleService } from './../../services/google.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-srvhttp',
  templateUrl: './lista-srvhttp.component.html',
  styleUrls: ['./lista-srvhttp.component.css']
})
export class ListaSrvhttpComponent implements OnInit {

  aLibros: Array<string>;
  sClave: string;

  constructor(public googleService: GoogleService) { }

  ngOnInit() {
    this.aLibros = [];
  }

  buscar() {
    this.googleService.buscarLibros(this.sClave).subscribe(
      (response) => {
        console.log(this.aLibros = response);
    });
  }

}
