import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Pregunta1Component } from '../pregunta1/pregunta1.component';
import { Pregunta2Component } from '../pregunta2/pregunta2.component';
import { Pregunta3Component } from '../pregunta3/pregunta3.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';


@NgModule({
  declarations: [
    Pregunta1Component,
    Pregunta2Component,
    Pregunta3Component
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }