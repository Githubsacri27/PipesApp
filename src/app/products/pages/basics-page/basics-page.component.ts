import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameLower: string ='ruben';
  public nameUpper: string ='RUBEN';
  public fullName: string ='rUbEn';


  public customDate: Date = new Date();

}
