import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import {Meuble} from "./meuble";

@Injectable({
  providedIn: 'root'

})
export class MeubleService {


  private baseURL="http://localhost:8080/api/v1/meubles";
  constructor(private httpClient: HttpClient) { }

  getMeublesList(): Observable<Meuble[]>{
    return this.httpClient.get<Meuble[]>(`${this.baseURL}`);
  }

  createMeuble(meuble: Meuble): Observable<any>{
    return this.httpClient.post(`${this.baseURL}`, meuble);
  }

  getMeubleById(id: number): Observable<Meuble>{
    return this.httpClient.get<Meuble>(`${this.baseURL}/${id}`);

  }

  updateMeuble(id: number, meuble: Meuble): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, meuble);
  }

  deleteMeuble(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
