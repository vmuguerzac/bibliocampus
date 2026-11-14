import { Injectable } from '@angular/core';
import { LIBROS } from '../data/libros';
import { Libro } from '../modelos/libro';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LibroService {
  // Copia del arreglo original de libros
  private libros:Libro[] = LIBROS.map((l) => ({...l})); 
  

  // listar
  listar(terminoBusqueda:string = ''):Observable<Libro[]>{
    const temp = terminoBusqueda.toLowerCase();
    
    const lista = this.libros.filter(
      (libro) => !temp || 
        libro.titulo.toLowerCase().includes(temp) || 
        libro.autor.toLowerCase().includes(temp)
    )
    return of(lista);
  }

  // descontar copia 
  descontarCopia(id:number):Observable<void> {
    this.libros = this.libros.map((l) => 
        l.id === id?{...l, copiasDisponibles: l.copiasDisponibles - 1}:l,
    );
    return of(undefined);
  }

}
