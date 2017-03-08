import { Component } from '@angular/core';
import { LifecycleComponent } from './lifecycle.component';

@Component({
  selector: 'app-root',
  template: `
    <h1>Root Component</h1>
    <fa-lifecycle *ngIf="!delete"></fa-lifecycle>
    <button (click)="delete = true"> Destruction </button>
  `
})
export class AppComponent {
  title = 'Rachael\'s App';
  delete = false;
}
