import { Component } from '@angular/core';

@Component({
  selector: 'app-libro-card',
  imports: [],
  templateUrl: './libro-card.html',
  styleUrl: './libro-card.css',
})
export class LibroCard {
  titulo:string = "Clean Code";
  autor:string = "Robert C. Martin";
  anio:number = 2008;
  copias:number = 0;
  categoria = "Buenas prácticas";

}
