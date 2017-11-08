import { LibrosService } from './services/libros.service';
import { ServicesModule } from './services/services.module';
import { MainModule } from './main/main.module';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    MainModule,
    ServicesModule
  ],
  providers: [LibrosService],
  bootstrap: [AppComponent]
})
export class AppModule { }