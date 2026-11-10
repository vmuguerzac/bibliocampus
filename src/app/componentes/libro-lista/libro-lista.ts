import { Component, computed, inject, signal } from '@angular/core';
import { LibroCard } from '../libro-card/libro-card';
import { Libro } from '../../modelos/libro';
import { LIBROS } from '../../data/libros';
import { LibroService } from '../../servicios/libro-service';

@Component({
  selector: 'app-libro-lista',
  imports: [LibroCard],
  templateUrl: './libro-lista.html',
  styleUrl: './libro-lista.css',
})
export class LibroLista {
  private libroService = inject(LibroService); // inyeccion de dependencias

  protected libros = signal<Libro[]>([]);
  protected terminoBusqueda = signal('');
  protected borrador = signal('');
  protected cargando = signal(false);
  protected mensaje = signal<string|null>(null);

  constructor() { // lo primero a cargar cuando el componente sea visible
    this.cargar();
  }

  // Pide los libros al servicio
  private cargar():void {
    this.cargando.set(true);
    this.libroService.listar(this.terminoBusqueda()).subscribe((librosServicio) => {
      this.libros.set(librosServicio);
      this.cargando.set(false);
    });
  }

  protected alEscribir(evento:Event):void {
    this.borrador.set((evento.target as HTMLInputElement).value);
  }
  
  protected alBuscar():void {
    this.terminoBusqueda.set(this.borrador().trim());
    this.cargar();
  }

  protected alSolicitar(libro:Libro):void {
    // Actualizar las copias disponibles
    this.libroService.descontarCopia(libro.id).subscribe(()=>{
      this.mensaje.set(`Solicitaste ${libro.titulo}`);
      this.cargar();
    })
    
  }
}
