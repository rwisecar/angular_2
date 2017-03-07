import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Inline Template</h1>
    <div id="fa-other">"Well hello there!"</div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rachael\'s App';
}
