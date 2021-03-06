import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BuscarComponent } from './buscar/buscar.component';
import { SharedModule } from './shared/shared.module';
import { ServiciosModule } from './servicios/servicios.module';

@NgModule({
  declarations: [
    AppComponent,
    BuscarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ServiciosModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }