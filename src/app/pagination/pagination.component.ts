import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() totalPages! : number;
  @Input() currentPage! : string;
  @Input() username! : string;

  constructor(private router: Router) {}


  goToPage(type: string){
    if(type === 'older'){
      this.currentPage = ((+this.currentPage) - 1).toString();
      this.router.navigate(['khulalit'], { queryParams: { page: this.currentPage } });
    }
    if(type === 'newer'){
      this.currentPage = ((+this.currentPage) + 1).toString();
      this.router.navigate(['khulalit'], { queryParams: { page: this.currentPage } });
    }
  }
  createRange(number: number) : number[]{
    return new Array(number).fill(0)
      .map((n, index) => index + 1);
  }
}
