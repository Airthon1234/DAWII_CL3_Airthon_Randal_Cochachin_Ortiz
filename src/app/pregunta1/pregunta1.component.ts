import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pregunta1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pregunta1.component.html',
  styleUrl: './pregunta1.component.css'
})
export class Pregunta1Component {

  tiempoHoras: number = 0;
  tiempoMinutos: number = 0;
  costoTotal: number = 0;

  calcularCosto(): void {
    const tiempoTotal = this.tiempoHoras + this.tiempoMinutos / 60;
    this.costoTotal = tiempoTotal * 1500;
  }
}