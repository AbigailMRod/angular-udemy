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


  agregarHeroe(heroe: Heroe): Observable<Heroe>{
    return this.http.post<Heroe>(`${this.endpoint}/heroes`, heroe);

  }


  actualizarHeroe(heroe: Heroe): Observable<Heroe>{
    return this.http.put<Heroe>(`${this.endpoint}/heroes/${heroe.id}`, heroe);
  }
  

  borrarHeroe(id:string): Observable<any>{
    return this.http.delete<any>(`${this.endpoint}/heroes/${id}`);
  }
}
