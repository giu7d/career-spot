import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {

  constructor( private router: Router ){
    router.events.subscribe((event) => {
      if (!(event instanceof NavigationEnd)) { return; }
      window.scrollTo(0, 0);
    });
  }

  setTheme() {
    if (this.router.url === '/') { return 'dark'; }
    else { return 'light'; }
  }

}
