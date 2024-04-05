import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable  } from 'rxjs';
import { Jugador } from '../components/jugadores/jugador';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlayerServicesService {
   
  private urlEndPoing:string = 'http://localhost:8080/api/lista';

  constructor(private http : HttpClient) { 
  }

  getClientes():Observable<Jugador[]>{
    return this.http.get<Jugador[]>(this.urlEndPoing)
  
  }
}
