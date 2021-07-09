import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private REST_API_SERVER = 'http://20.81.86.154:8080';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic ' + btoa(environment.username + ':' + environment.password),
    }),
  };

  constructor(private httpClient: HttpClient) {}

  public sendGetRequest() {
    console.log('inside service');
    return this.httpClient.get(this.REST_API_SERVER + '/api/v2/pokemons', {
      headers: this.httpOptions.headers,
    });
  }
}
