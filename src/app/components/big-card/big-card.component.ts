import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css'],
  imports: [RouterLink],
  standalone: true

})
export class BigCardComponent {
  @Input() Id?: string;
  @Input() photoCover!: string;
  @Input() cardTitle!: string;
  @Input() cardDescription!: string;
}

