import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = 'http://localhost:8080'
  helper = new JwtHelperService();

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login(credentials: any) {
    return this.http.post(this.url + '/api/users/authenticate', credentials)
      .pipe(map(response => {
        let result: any = response;
        if (result && result.token) {
          if (this.isAdmin(result.token)) {
            localStorage.setItem('token', result.token);
            return true;
          }
          else return false;
        }
        return false;
      }))
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  getUsername() {
    const token = localStorage.getItem('token');
    const decodedToken = this.helper.decodeToken((token as string));
    return decodedToken.sub;

  }

  isLoggedIn(): boolean {
    let token = localStorage.getItem('token');
    if (token) return true;
    return false;
  }

  isAdmin(token: string): boolean {
    let user = this.helper.decodeToken(token);
    if (user.auth.id === 1) return true;
    return false;
  }
}
