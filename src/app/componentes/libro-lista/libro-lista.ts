import { Component, computed, signal } from '@angular/core';
import { LibroCard } from '../libro-card/libro-card';
import { Libro } from '../../modelos/libro';
import { LIBROS } from '../../data/libros';

@Component({
  selector: 'app-libro-lista',
  imports: [LibroCard],
  templateUrl: './libro-lista.html',
  styleUrl: './libro-lista.css',
})
export class LibroLista {
  protected libros = signal<Libro[]>(LIBROS);
  protected terminoBusqueda = signal('');
  protected borrador = signal('');

  protected librosVisibles = computed(()=>{
    const temp = this.terminoBusqueda().toLowerCase();
    
    return this.libros().filter(
      (libro) => !temp || 
        libro.titulo.toLowerCase().includes(temp) || 
        libro.autor.toLowerCase().includes(temp)
    )
  });

  protected alEscribir(evento:Event):void {
    this.borrador.set((evento.target as HTMLInputElement).value);
  }
  
  protected alBuscar():void {
    this.terminoBusqueda.set(this.borrador().trim());
  }
}
