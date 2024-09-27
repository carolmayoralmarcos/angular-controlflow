import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CondicionalComponent } from './components/condicional/condicional.component';
import { BuclesComponent } from './components/bucles/bucles.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CondicionalComponent, BuclesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ControlFlow';
}
