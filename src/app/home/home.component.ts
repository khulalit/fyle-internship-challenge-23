import { Component, Output, EventEmitter } from '@angular/core';
import {InputDataService} from '../services/input-data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  username: string = '';
  repoPerPage: number = 10;

  constructor(private inputDataService: InputDataService, private router: Router) {}


  @Output() searchEvent = new EventEmitter<{ username: string, reposPerPage: number }>();

  submit() {
    if(!this.username) return;
    console.log("username",this.username)
    console.log(this.repoPerPage)

    this.inputDataService.setRepoPerPage(this.repoPerPage);
    this.inputDataService.setUsername(this.username);

    this.router.navigate([`user/${this.username}`], { queryParams: { page: 1 } });
    // this.searchEvent.emit({ username: this.username, reposPerPage: this.repoPerPage });
  }
}
