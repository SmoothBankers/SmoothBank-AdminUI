import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

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

  delete(id: string) {
    return this.http.delete(`${this.url}/users/${id}`, this.options)
  }

  register(form: any) {
    return this.http.post(this.url + '/admins', form)
      .pipe(
        map(response => {
          let result: any = response;
          if (result && result.token) {
            localStorage.setItem('token', result.token);
            return true;

          }

          return false;
        }), catchError(error => {
          return of(false);
        }))

  }
}
