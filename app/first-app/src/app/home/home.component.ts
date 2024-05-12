import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
  ],
  // template: `
  //   <p>
  //     home works!
  //   </p>
  // `,
  template: `
  <section>
    <form>
      <input type="text" placeholder="Filter by city">
      <button class="primary" type="button">Search</button>
    </form>
  </section>    
  `,
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
