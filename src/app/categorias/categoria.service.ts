import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from './categoria';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private urlBase = 'http://localhost:3000'
  constructor(private http: HttpClient) { }

  salvar(categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(this.urlBase + "/categorias", categoria)
  }

  obterTodas(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.urlBase + "/categorias");
  }
}

