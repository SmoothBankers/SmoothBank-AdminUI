import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  url = 'http://localhost:8081/api';

  //token = localStorage.getItem('token');
  options = {
    headers: new HttpHeaders({
      //Authorization: (this.token as string)
    })
  };

  constructor(private http: HttpClient) { }

  getAllLoans() {
    return this.http.get(`${this.url}/loanRecords`);
  }

  getOne(id: string) {
    return this.http.get(`${this.url}/cardRecords/${id}`);
  }
}
