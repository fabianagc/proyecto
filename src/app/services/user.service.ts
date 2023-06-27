import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://randomuser.me/api';

  constructor(private http: HttpClient) { }

  getRandomUser() {
    return this.http.get<any>(`${this.apiUrl}`);
  }
}