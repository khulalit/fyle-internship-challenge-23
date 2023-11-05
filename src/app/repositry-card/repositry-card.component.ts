import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-repositry-card',
  templateUrl: './repositry-card.component.html',
  styleUrls: ['./repositry-card.component.scss']
})
export class RepositryCardComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() topics!: any;

}
