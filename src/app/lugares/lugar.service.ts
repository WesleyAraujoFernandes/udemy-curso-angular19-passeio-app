import { HttpClient } from '@angular/common/http';
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
}
