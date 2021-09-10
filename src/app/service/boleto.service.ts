import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Boleto } from '../models/Boleto';

@Injectable({
  providedIn: 'root'
})
export class BoletoService {

  constructor(
    private http: HttpClient
  ) { }

  getAllBoletos(): Observable<Boleto[]>{
    return this.http.get<Boleto[]>(`${environment.uri}/boleto`)
  }

  getBoleto(id: number): Observable<Boleto>{
    return this.http.get<Boleto>(`${environment.uri}/boleto/${id}`)
  }

  putBoleto(boleto: Boleto): Observable<Boleto>{
    return this.http.put<Boleto>(`${environment.uri}/boleto`, boleto)
  }

  postBoleto(boleto: Boleto){
    return this.http.post<Boleto>(`${environment.uri}/boleto`, boleto)
  }

  deleteBoleto(id:number): Observable<Boleto>{
    return this.http.delete<Boleto>(`${environment.uri}/boleto/${id}`)
  }
}
