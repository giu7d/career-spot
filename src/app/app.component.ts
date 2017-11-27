import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-header></app-header>
            <main>
              <app-side-bar></app-side-bar>
              <app-dash></app-dash>
            </main>`
})
export class AppComponent {
}
