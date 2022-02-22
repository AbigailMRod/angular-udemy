import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Auth } from '../interfaces/auth.interface';
import { tap, Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private endpoint: string= environment.endpoint;
  private _auth: Auth | undefined;
  
  get auth(): Auth{
    return {... this._auth!}
  }

  constructor(private http: HttpClient) { }

  veriicaAutenticacion(): Observable<boolean>{
    if(!localStorage.getItem('id')){
      return of(false); //el of de rxjs es para tranformar algo en observables
    }
    return this.http.get<Auth>(`${this.endpoint}/usuarios/1`)
      .pipe(
        map(auth => {
          this._auth = auth;
          return true;
        })
      )
  }

  login(){
    return this.http.get<Auth>(`${this.endpoint}/usuarios/1`)
      .pipe(
        tap(auth => this._auth = auth ),
        tap(auth => localStorage.setItem('id', auth.id) )

      );
  }
}
