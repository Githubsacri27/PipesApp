import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { NgModule } from '@angular/core';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { MenubarModule } from 'primeng/menubar';



@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,

    PrimeNgModule,
  ],
  exports: [
    MenuComponent,
    MenubarModule
  ]
})
export class SharedModule { }
