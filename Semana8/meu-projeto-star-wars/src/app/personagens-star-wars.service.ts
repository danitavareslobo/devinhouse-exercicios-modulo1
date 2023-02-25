import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_PATH } from "../environments/environments";
import { PersonagemClass } from "../app/personagem-class";
import { Observable } from 'rxjs';
import { IPersonagem } from './star-wars';

@Injectable({
  providedIn: 'root'
})

export class PersonagensStarWarsService {
  
  private url = "http://localhost:3000/personagens";
  // private urlEnv = 

  constructor(private _httpClient: HttpClient) { }

  public getPersonagens(): Observable<PersonagemClass[]> {
    return this._httpClient.get<PersonagemClass[]>(`${API_PATH}`);
  }

  // public getPersonagemURL() {
  //   return this._httpClient.get<PersonagemClass[]>(this.url);
  // }

  // public getPersonagemInterface(): Promise<IPersonagem[]> {
  //   return this._httpClient.get<IPersonagem[]>(API_PATH).toPromise;
  // }
  
}
