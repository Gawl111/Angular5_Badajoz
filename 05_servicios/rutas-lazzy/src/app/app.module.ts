import { AboutModule } from './about/about.module';
import { CursosModule } from './cursos/cursos.module';
import { LibrosModule } from './libros/libros.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { appRouting } from './app-routing';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    appRouting,
    SharedModule,
    HomeModule,
    LibrosModule,
    CursosModule,
    AboutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
