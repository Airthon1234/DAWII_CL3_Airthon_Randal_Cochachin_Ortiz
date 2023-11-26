import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pregunta2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pregunta2.component.html',
  styleUrl: './pregunta2.component.css'
})
export class Pregunta2Component {

  nota1: number = 0;
  nota2: number = 0;
  nota3: number = 0;
  promedio: number = 0;

  calcularPromedio(): void {
    const promedioCalculado = this.nota1 * 0.2 + this.nota2 * 0.3 + this.nota3 * 0.5;
    this.promedio = promedioCalculado;
  }
}