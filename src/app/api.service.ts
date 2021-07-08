import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private REST_API_SERVER = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) {}

  public sendGetRequest() {
    console.log('inside service');
    return this.httpClient.get(this.REST_API_SERVER + '/api/v2/pokemons/10');
  }
}
