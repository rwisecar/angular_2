import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Inline Template</h1>
    <fa-other></fa-other>
    <fa-another>
        <div>
            <h1>Hello world</h1>
        </div>
    </fa-another>
  `,
  styles: [`
      h1 {
          color: red;
      }
  `]
})
export class AppComponent {
  title = 'Rachael\'s App';
}
