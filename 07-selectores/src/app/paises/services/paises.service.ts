import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, Observable, of } from 'rxjs';
import { PaisSmall, Pais } from '../interfaces/pases.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private baseURL: string = 'https://restcountries.com/v2'
  private _regiones: string[]= ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  get regiones(): string[]{
    return[...this._regiones];
  }


  constructor(private http: HttpClient) { }

  getPaisesRegion (region: string): Observable<PaisSmall[]>{
    const url: string = `${this.baseURL}/region/${region}?fields=name,alpha3Code`
    return this.http.get<PaisSmall[]>(url)
  }

  getPaisCodigo(codigo: string): Observable<Pais | null>{

    if(!codigo){
      return of (null)
    }
    const url = `${this.baseURL}/alpha/${codigo}`
    return this.http.get<Pais>(url)
  }

  getPaisCodigoSmall(codigo: string): Observable<PaisSmall>{

    const url = `${this.baseURL}/alpha/${codigo}?fields=name,alpha3Code`
    return this.http.get<PaisSmall>(url)
  }

  getPaisesPorCodigos(borders: string[]): Observable<PaisSmall[]>{
    if(!borders){
      return of ([]);
    }
    const peticiones: Observable<PaisSmall>[]=[];

    borders.forEach(codigo => {
      const peticion = this.getPaisCodigoSmall(codigo);
      peticiones.push(peticion);
    });

    return combineLatest(peticiones);
  }
}
