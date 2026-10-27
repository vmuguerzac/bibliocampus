import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LibroCard } from './componentes/libro-card/libro-card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LibroCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('bibliocampus');
}
