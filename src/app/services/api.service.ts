import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://api.github.com';

  constructor(private http: HttpClient) {}

  getUser(username: string): Observable<any> {
    const url = `${this.apiUrl}/users/${username}`;
    return this.http.get(url);
  }

  getUserRepos(username: string, page:number): Observable<any[]> {
    const url = `${this.apiUrl}/users/${username}/repos?per_page=10&&page=${page}`;
    return this.http.get<any[]>(url);
  }

}
