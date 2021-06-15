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
    return this.http.get(`${this.url}/cardRecords`, this.options);

    /**
     * 
HttpErrorResponse {headers: HttpHeaders, status: 0, statusText: "Unknown Error", url: "http://localhost:8081/api/cardRecords", ok: false, …}
error: ProgressEvent {isTrusted: true, lengthComputable: false, loaded: 0, total: 0, type: "error", …}
headers: HttpHeaders {normalizedNames: Map(0), lazyUpdate: null, headers: Map(0)}
message: "Http failure response for http://localhost:8081/api/cardRecords: 0 Unknown Error"
name: "HttpErrorResponse"
ok: false
status: 0
statusText: "Unknown Error"
url: "http://localhost:8081/api/cardRecords"
__proto__: HttpResponseBase
     */

  }

  getOne(id: string) {
    return this.http.get(`${this.url}/cardRecords/${id}`, this.options);
  }
}
