import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css'],
  imports: [RouterLink],
  standalone: true
})
export class SmallCardComponent {
  @Input() id!: string;
  @Input() photoCover!: string;
  @Input() cardTitle!: string;
}
