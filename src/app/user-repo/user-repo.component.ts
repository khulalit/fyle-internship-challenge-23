import { Component, OnInit, inject, NgModule } from '@angular/core';
import { ActivatedRoute, ParamMap, Router} from '@angular/router';
import { ApiService } from '../services/api.service';
import { InputDataService } from '../services/input-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-repo',
  templateUrl: './user-repo.component.html',
  styleUrls: ['./user-repo.component.scss']
})
export class UserRepoComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  username : string | null = 'khulalit';
  repos: any;
  page: any = 1;
  user: any;
  totalPages: number = 1;
  loading: boolean = false;
  load : boolean =  true;
  subscription : Subscription;
  message : string = "";


  constructor(
    private apiService: ApiService,
    private inputDataService: InputDataService
  ) {
    this.subscription = this.apiService.loadingStateChanged.subscribe(
      (isLoading) => (this.loading = isLoading)
    );
  }


  ngOnInit(): void {
    this.apiService.show();
    this.route.paramMap.subscribe((params: ParamMap)=>{
      this.username = params.get('username');
      this.route.queryParamMap.subscribe((params: ParamMap)=>{
        this.page = params.get('page');
        this.getUserRepos();
        this.getUserDetails();
        this.apiService.hide();
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
        if(error.status === 404){
          this.message = "No user Found."
        }
      }
    );
  }

  getUserRepos(): void {
    console.log(this.loading)
    this.load = true;
    setTimeout(() => {
      
      if(!this.username) return;
  
      if(!this.page) {
        this.page = 1
      }
  
      this.apiService.getUserRepos(this.username, +this.page, this.inputDataService.repoPerPage).subscribe(
        (data) => {
          this.repos = data;
          console.log(data)
          this.load = false;
        },
        (error) => {
          console.error('Error fetching user repos', error);
          this.load = false;
        }
      );
    }, 2000);
  }

  hasRoute(route: string){
    return this.router.url === route;
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
