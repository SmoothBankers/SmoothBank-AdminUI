import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:8080/api';

  token = localStorage.getItem('token');
  options = {
    headers: new HttpHeaders({
      Authorization: (this.token as string)
    })
  };

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get(`${this.url}/users`, this.options);
  }

  getAllAdmins() {
    return this.http.get(`${this.url}/admins`, this.options);
  }

  getOne(id: string) {
    return this.http.get(`${this.url}/users/${id}`, this.options);
  }
}
