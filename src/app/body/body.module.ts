import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngresaComponent } from './ingresa/ingresa.component';



@NgModule({
  declarations: [
    IngresaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IngresaComponent
  ]
})
export class BodyModule { }
