import { Component, OnInit } from '@angular/core';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-side-bar',
  template: `<div class="ng-side-bar">
              <ul>
                <li>
                  <a href="#!"><i class="material-icons">supervisor_account</i><span>Candidatos</span></a>
                </li>                  
                <li>
                  <div class="divider"></div>
                </li> 
              </ul>
            </div>`
})
export class SideBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
