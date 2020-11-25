import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Libro } from '../interfaces/libro';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  constructor(private http: HttpClient) { }

  obtenerLibros() {
    // return fetch('http://localhost:3000/libros')
    // return this.http.get<[Libro]>('http://localhost:3000/libros')
    return this.http.get<Array<Libro>>(`${environment.API_URL}/libros`)
  }
}
