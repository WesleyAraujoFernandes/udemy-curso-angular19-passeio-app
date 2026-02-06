import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lugar } from './lugar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LugarService {

  private urlBase: string = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  salvar(lugar: Lugar): Observable<Lugar> {
    return this.http.post<Lugar>(this.urlBase + '/lugares', lugar)
  }

  obterTodos(): Observable<Lugar[]> {
    return this.http.get<Lugar[]>(this.urlBase + '/lugares')
  }

  filtrar(nome: string, categoria: string): Observable<Lugar[]> {
    const parametros = new HttpParams();

    if (nome) {
      parametros.set('nome_like', nome)
    }

    if (categoria) {
      parametros.set('categoria', categoria)
    }

    console.log("parametros: ", parametros)

    return this.http.get<Lugar[]>(this.urlBase + '/lugares', {
      params: parametros
    })
  }
}
