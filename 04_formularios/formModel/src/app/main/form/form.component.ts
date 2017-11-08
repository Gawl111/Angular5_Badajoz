import { UserModel } from './../../models/userModel';
import { DepartamentoModel } from './../../models/departaments';
import { Printer, PrinterModel } from './../../models/printers';
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  aPrinters: Array<Printer>;
  isColor: boolean;
  isClaro: boolean;
  impresoraSeleccionada: Printer;
  aDepartamento: Array<DepartamentoModel>;
  departamentoSeleccionado: DepartamentoModel;
  print: string;
  user: UserModel;
  @ViewChild('formulario') formulario: any;
  mostrarFinal: boolean;

  constructor() {
  }

  ngOnInit() {
    this.aPrinters = [new PrinterModel (1, 'HP', 'tinta'),
                      new PrinterModel (2, 'Brother', 'laser'),
                      {id: 3, modelo: 'Xerox', tipo: 'laser'}];

    this.aDepartamento = [new DepartamentoModel (1, 'Ventas'),
                           new DepartamentoModel (2, 'Marketing'),
                           new DepartamentoModel (3, 'Inventario'),
                           new DepartamentoModel (4, 'Administración'),
                           new DepartamentoModel (5, 'Logística')];

    this.user = new UserModel ('', '', null);
    this.mostrarFinal = false;

    console.log(this.formulario);
  }

  avisarPrint() {

  }

  avisarDepartamento() {

  }

  enviar () {
    this.mostrarFinal = true;
  }
  borrar() {
    console.log('Borrado');
    this.formulario.reset();
  }
}
