
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
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
