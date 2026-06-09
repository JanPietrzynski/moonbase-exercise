import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-card',
  imports: [MatIconModule],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  title = input.required<string>();
  value = input.required<number>();
  icon = input.required<string>();
  iconColor = input.required<string>();
  bgColor = input.required<string>();
}
