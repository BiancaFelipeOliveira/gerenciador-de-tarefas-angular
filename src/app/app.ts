import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Tarefa } from './tarefa/tarefa';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Tarefa],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolioAngular');
}
