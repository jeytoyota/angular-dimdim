import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Cliente } from '../models/Cliente';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(
    private http: HttpClient
  ) { }

  getAllClientes(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(`${environment.uri}/cliente`)
  }

  getCliente(id: number): Observable<Cliente>{
    return this.http.get<Cliente>(`${environment.uri}/cliente${id}`)
  }

  putCliente(cliente: Cliente): Observable<Cliente>{
    return this.http.put<Cliente>(`${environment.uri}/cliente`, cliente)
  }

  postCliente(cliente: Cliente){
    return this.http.post<Cliente>(`${environment.uri}/cliente`, cliente)
  }

  deleteCliente(id:number): Observable<Cliente>{
    return this.http.delete<Cliente>(`${environment.uri}/cliente${id}`)
  }
}
