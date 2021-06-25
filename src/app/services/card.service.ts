import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  url = 'http://localhost:8081/api';

  //token = localStorage.getItem('token');
  options = {
    headers: new HttpHeaders({
      //Authorization: (this.token as string)
    })
  };

  constructor(private http: HttpClient) { }

  getAllCards() {
    return this.http.get(`${this.url}/cardRecords`);
  }

  getOne(id: string) {
    return this.http.get(`${this.url}/cardRecords/${id}`);
  }

  update(record: any) {
    console.log(`${this.url}/cardRecords`, record);
    return this.http.put(`${this.url}/cardRecords`, record);//does not seem to actually call the controller, even though cURL PUT works
  }
}
