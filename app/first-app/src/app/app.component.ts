import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    // RouterOutlet,
    HomeComponent
  ],
  // templateUrl: './app.component.html',
  // template: '<h1>Hello World!</h1>',
  template: `
    <main>
      <header class="brand-name">
        <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
      </header>
      <section class="content">
        <app-home></app-home>
      </section>
      `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // title = 'first-app';
  title = 'homes';
}
