import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { RouterModule } from "@angular/router";



@Component({
  selector: 'app-root',
  imports: [Header, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');
}
