import { Component } from '@angular/core';
import { LifecycleComponent } from './lifecycle.component';

@Component({
  selector: 'app-root',
  template: `
    <h1>Root Component</h1>
    <fa-lifecycle *ngIf="!delete" [bindable]="boundValue">
        <p #boundContent>{{ test }}</p>
    </fa-lifecycle>
    <button (click)="delete = true"> Destruction </button>
    <button (click)="test = 'Changed Value'"> Click to Change Content</button>
    <button (click)="boundValue = 2000"> Click to Change Binding</button>
  `
})
export class AppComponent {
  title = 'Rachael\'s App';
  delete = false;
  test = "Starting Value";
  boundValue = 1000;
}
