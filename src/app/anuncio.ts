export interface Anuncio {
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Anuncio } from './anuncio';

@Injectable({
  providedIn: 'root'
})
export class AnuncioService {
  private apiUrl = 'http://localhost:3000/anuncios';

  constructor(private http: HttpClient) {}

  cadastrarAnuncio(anuncio: Anuncio): Observable<Anuncio> {
    return this.http.post<Anuncio>(this.apiUrl, anuncio);
  }

  obterAnuncios(): Observable<Anuncio[]> {
    return this.http.get<Anuncio[]>(this.apiUrl);
  }
}

