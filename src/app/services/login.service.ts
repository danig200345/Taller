import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { debounceTime, Observable, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private log = 'http://localhost:4000/';

  constructor(private http: HttpClient) { }


  getUsers(user: string): Observable<any> {
    const url = this.log + 'user' + `/${user}`
    return this.http.get<any>(url)
  }

  postLogin(user: string, password: string): Observable<any> {
    const url = this.log + 'login'
    return this.http.post<any>(url, { user, password }, { withCredentials: true })
  }

  postRegister(user: string, password: string): Observable<any> {
    const url = this.log + 'register'
    return this.http.post<any>(url, { user, password })
  }
  logout(): Observable<any> {
    const url = this.log + 'logout';
    return this.http.post<any>(url, {}, { withCredentials: true });
  }



}
