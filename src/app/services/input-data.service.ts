import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InputDataService {
  repoPerPage: number = 10;
  username: string = "khulalit";

  setRepoPerPage(repoPerPage: number): void {
    this.repoPerPage = repoPerPage;
  }

  setUsername(username: string): void {
    this.username = username;
  }
}
