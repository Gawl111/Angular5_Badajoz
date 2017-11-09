import { GoogleService } from './services/google.service';
import { LibrosService } from './services/libros.service';
import { ServicesModule } from './services/services.module';
import { MainModule } from './main/main.module';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
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
    HttpModule,
    ServicesModule
  ],
  providers: [LibrosService, GoogleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
