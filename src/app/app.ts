import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LibroCard } from './componentes/libro-card/libro-card';
import { Navbar } from './componentes/navbar/navbar';
import { LibroLista } from './componentes/libro-lista/libro-lista';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, LibroLista],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('bibliocampus');
}
