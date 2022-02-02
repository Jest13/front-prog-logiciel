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
}
