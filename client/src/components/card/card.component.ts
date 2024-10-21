import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() car!: {
    title: string;
    image: string;
    name: string;
    features: { icon: string, quantity: string }[];
    distances: { label: string, value: string }[];
    price: string;
  };
}
