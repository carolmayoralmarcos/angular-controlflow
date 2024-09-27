import { Component } from '@angular/core';

@Component({
  selector: 'app-condicional',
  standalone: true,
  imports: [],
  templateUrl: './condicional.component.html',
  styleUrl: './condicional.component.css'
})
export class CondicionalComponent {

  mostrar: boolean = true;
  edad: number = 80;

  onClick() {
    // this.mostrar = this.mostrar ? false : true;
    this.mostrar = !this.mostrar;
  }

}

// TODO: Buscar indentación control flow
