import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-panel',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './main-panel.component.html',
  styleUrl: './main-panel.component.scss'
})
export class MainPanelComponent {
  cars = [
    {
      title: 'BUSINESS',
      image: '../../assets/images/car-1.png',
      name: 'Mercedes-Benz E-Class',
      features: [
        { icon: '../../assets/images/icons/user.svg', quantity: 'X4' },
        { icon: '../../assets/images/icons/briefcase.svg', quantity: 'X2' }
      ],
      distances: [
        { label: 'Distance', value: '19 mls' },
        { label: 'Distance', value: '19 mls' }
      ],
      price: '£1234.00',
      isSelected: false
    },
    {
      title: 'PREMIUM',
      image: '../../assets/images/car-2.png',
      name: 'Mercedes-Benz S-Class',
      features: [
        { icon: '../../assets/images/icons/user.svg', quantity: 'X5' },
        { icon: '../../assets/images/icons/briefcase.svg', quantity: 'X3' }
      ],
      distances: [
        { label: 'Distance', value: '21 mls' },
        { label: 'Distance', value: '21 mls' }
      ],
      price: '£1450.00',
      isSelected: false
    },
    {
      title: 'GRAND',
      image: '../../assets/images/car-3.jpg',
      name: 'Mercedes-Benz V-Class',
      features: [
        { icon: '../../assets/images/icons/user.svg', quantity: 'X5' },
        { icon: '../../assets/images/icons/briefcase.svg', quantity: 'X3' }
      ],
      distances: [
        { label: 'Distance', value: '21 mls' },
        { label: 'Distance', value: '21 mls' }
      ],
      price: '£1450.00',
      isSelected: false,
    },
    {
      title: 'VIP',
      image: '../../assets/images/car-4.png',
      name: 'Range Rover ',
      features: [
        { icon: '../../assets/images/icons/user.svg', quantity: 'X5' },
        { icon: '../../assets/images/icons/briefcase.svg', quantity: 'X3' }
      ],
      distances: [
        { label: 'Distance', value: '21 mls' },
        { label: 'Distance', value: '21 mls' }
      ],
      price: '£1450.00',
      isSelected: false,
    },
  ];

  toggleSelect(car: any) {
    car.isSelected = !car.isSelected;
  }
}
