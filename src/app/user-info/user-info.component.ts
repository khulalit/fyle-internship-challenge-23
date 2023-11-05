import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent {
 
  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute
  ) {}

  username : string| null = '';
  user: any;

  ngOnInit(): void {
    this.getUserDetails();
    this.route.paramMap.subscribe((params: ParamMap)=>{
      this.username = params.get('username');
      this.getUserDetails();
    })
  }
  
  getUserDetails(): void {
    if(!this.username) return;
    this.apiService.getUser(this.username).subscribe(
      (data) => {
        this.user = data;
      },
      (error) => {
        console.error('Error fetching user details', error);
      }
    );
  }

}
