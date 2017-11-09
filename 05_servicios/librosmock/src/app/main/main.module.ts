import { GoogleService } from './../services/google.service';
import { ListaSrvhttpComponent } from './lista-srvhttp/lista-srvhttp.component';
import { ListaGoogleComponent } from './lista-google/lista-google.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista/lista.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ListaComponent, ListaGoogleComponent, ListaSrvhttpComponent],
  exports: [ListaComponent, ListaGoogleComponent, ListaSrvhttpComponent]
})
export class MainModule { }
