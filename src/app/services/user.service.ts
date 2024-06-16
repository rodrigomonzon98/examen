import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  private API_URL: string = 'https://reqres.in/api';

  getUsers(): Observable<any> {
    return this.httpClient.get(`${this.API_URL}/users`)
    .pipe( res => res)
  }
}
