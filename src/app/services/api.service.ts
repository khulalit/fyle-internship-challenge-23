import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, throwError, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://api.github.com';
  private loadingStateSubject = new BehaviorSubject<boolean>(false);

  loadingStateChanged = this.loadingStateSubject.asObservable();

  constructor(private http: HttpClient) {}

  getUser(username: string): Observable<any> {
    const url = `${this.apiUrl}/users/${username}`;
    return this.http.get(url);
  }

  getUserRepos(username: string, page:number, repoPerPage: number): Observable<any[]> {
    const url = `${this.apiUrl}/users/${username}/repos?per_page=${repoPerPage || 10}&&page=${page}`;
    return this.http.get<any[]>(url);
  }

  show(): void {
    this.loadingStateSubject.next(true);
  }

  hide(): void {
    this.loadingStateSubject.next(false);
  }

}
