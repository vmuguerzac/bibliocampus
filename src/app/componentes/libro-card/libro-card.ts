import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-libro-card',
  imports: [],
  templateUrl: './libro-card.html',
  styleUrl: './libro-card.css',
})
export class LibroCard {
  titulo:string = "Clean Code Rev";
  autor:string = "Robert C. Martin";
  anio:number = 2008;
  copias = signal(3);
  categoria = "Buenas prácticas";

  protected agotado = computed(() => this.copias() === 0);
  protected etiqueta = computed(()=>
    this.agotado() ? 'Agotado':`Dispobile · ${this.copias()} ${this.copias() === 1? 'copia':'copias'}`
  );

  protected alSolicitar():void {
    this.copias.update((c) => c + 1 )
  }



}
