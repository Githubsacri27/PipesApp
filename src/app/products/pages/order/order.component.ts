import { Component } from '@angular/core';
import { Color, Smartphone } from '../../interfaces/smartphone.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  public isUpperCase: boolean = false;
  public orderBy?: keyof Smartphone;

  public smartphones: Smartphone[] = [
    {
      brand: 'Apple',
      model: 'iPhone 13',
      price: 999,
      color: Color.black,
      has5G: true,
      imageUrl: 'assets/images/iphone13.webp',
    },
    {
      brand: 'Samsung',
      model: 'Galaxy S21',
      price: 899,
      color: Color.blue,
      has5G: true,
      imageUrl: 'assets/images/galaxy-s21.webp',
    },
    {
      brand: 'Google',
      model: 'Pixel 6',
      price: 799,
      color: Color.white,
      has5G: true,
      imageUrl: 'assets/images/pixel6.webp',
    },
    {
      brand: 'OnePlus',
      model: 'OnePlus 9',
      price: 729,
      color: Color.green,
      has5G: true,
      imageUrl: 'assets/images/oneplus9.webp',
    },
    {
      brand: 'Xiaomi',
      model: 'Mi 11',
      price: 699,
      color: Color.gold,
      has5G: false,
      imageUrl: 'assets/images/mi11.webp',
    },
  ];

  toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder(value: keyof Smartphone): void {
    this.orderBy = value;
  }
}
