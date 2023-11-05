import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, ParamMap, } from '@angular/router';
import { ApiService } from './services/api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  private route = inject(ActivatedRoute);


  constructor(
    private apiService: ApiService,
  ) {}

  username : string | null = 'khulalit';
  repos: any;
  topics = ['js', 'ts', 'react'];
  page: any = 1;
  user: any;
  totalPages: number = 1;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap)=>{
      this.username = params.get('username');
      this.route.queryParamMap.subscribe((params: ParamMap)=>{
        this.page = params.get('page');
        this.getUserRepos();
        this.getUserDetails();
      })
    })
  }

  getUserDetails(): void {
    if(!this.username) return;
    this.apiService.getUser(this.username).subscribe(
      (data) => {
        this.user = data;
        this.totalPages = Math.ceil(data.public_repos/10);
      },
      (error) => {
        console.error('Error fetching user details', error);
      }
    );
  }

  getUserRepos(): void {
    if(!this.username) return;
    if(!this.page) {this.page = 1}
    this.apiService.getUserRepos(this.username, +this.page).subscribe(
      (data) => {
        this.repos = data;
      },
      (error) => {
        console.error('Error fetching user repos', error);
      }
    );
  }
}
