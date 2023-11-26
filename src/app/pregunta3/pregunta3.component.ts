import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pregunta3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pregunta3.component.html',
  styleUrl: './pregunta3.component.css'
})
export class Pregunta3Component implements OnInit{
  episodes: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('https://rickandmortyapi.com/api/episode').subscribe((data: any) => {

      this.episodes = data.results.filter((episode: any) => episode.id % 2 !== 0);
    });
  }

}
