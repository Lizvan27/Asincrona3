import { Component } from '@angular/core';

@Component({
  selector: 'app-ingresa',
  templateUrl: './ingresa.component.html',
  styleUrls: ['./ingresa.component.css']
})
export class IngresaComponent {
  cursos = ['JavaScript', 'C#'];

  addCurso(nombrec:String){
    alert(nombrec);
    this.cursos.push(String(nombrec));
  }

}
