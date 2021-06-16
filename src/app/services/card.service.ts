import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  url = 'http://localhost:8081/api';

  token = localStorage.getItem('token');
  options = {
    headers: new HttpHeaders({
      Authorization: (this.token as string)
    })
  };

  constructor(private http: HttpClient) { }

  getAllCards() {
    //console.log("Http"); //Appears
    //console.log(this.http); //Appears, so it is initialized and constructed

    let data = this.http.get(`${this.url}/cardRecords`, this.options); 
    //The url is absolutely correct, the below console log actually produces a clickable link in the console
    //that you can click on and will produce the correct result, so something is up with this method itself?
    //Doesn't sounds right though, hard to imagine that Angular itself is wrong.
    //Removing options breaks it, maybe something is up with the constructor?

    console.log(`${this.url}/cardRecords`);//Appears, and what's more is that this is a clickable link that works entirely
    console.log(data);  //Appears, but not as expected. Backend not showing it's debug message, get is not calling properly
    return data;
  }

  getOne(id: string) {
    return this.http.get(`${this.url}/cardRecords/${id}`, this.options);
  }
}
