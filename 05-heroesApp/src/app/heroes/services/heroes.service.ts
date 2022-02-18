import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Heroe } from '../interfaces/heroes.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private endpoint: string = environment.endpoint;

  constructor(private http: HttpClient) {   }

  getHeroes(): Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${this.endpoint}/heroes`);
  }

  getHeroePorI(id:string): Observable<Heroe>{
    return this.http.get<Heroe>(`${this.endpoint}/heroes/${id}`);
  }

  getSugerencias(termino: string): Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${this.endpoint}/heroes?q=${termino}&_limit=5`);

  }
}
