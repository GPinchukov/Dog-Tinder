import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Dogs} from "./interfaces";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DogsService {

  constructor(private http: HttpClient) { }

  getAll(url: string): Observable<any> {
    return this.http.get(url,  {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        'x-api-key': 'a922dc37-3d4f-4c34-8ca2-3843077c187b\n'
      })
    })
  }

}
