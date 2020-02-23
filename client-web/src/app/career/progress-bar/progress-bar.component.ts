import { Component, OnInit, Input } from '@angular/core';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html'
})

export class ProgressBarComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    this.stickHeader();
  }

  stickHeader() {
    let fromAbove = 0;
    $(window).scroll(function() {
      const scroll = $(window).scrollTop();
      const height = $(document).height();


      if (scroll >= 120) {

        // if ( $('#pageTitle') === true ) { console.log('é'); }
        // else { console.log('wtf'); }
        // $('#pageTitle').show();
        // $('.btn-nav').addClass('ng');
        if (scroll >= 350 || scroll >= (height / 2)) {
          $('.progressbar').addClass('progress-header').addClass('animated slideInRight').css('z-index', '20');
          $('.header-title.fixed').css('z-index', '10').removeClass('animated slideInLeft');
          fromAbove = 1;
        }
        else {
          if (fromAbove === 0) { $('.header-title').addClass('fixed'); }
          else { $('.header-title').addClass('fixed').addClass('animated slideInLeft'); }

          $('.header-title.fixed').css('z-index', '20');
          $('.progress-header').css('z-index', '10').removeClass('animated slideInRight');
        }
      }
      else if (scroll <= 50) {
        $('.header-title.fixed').removeClass('animated slideInLeft').removeClass('fixed').css('z-index', '10');
        $('.progress-header').removeClass('animated slideInRight').removeClass('progress-header').css('z-index', '10');

        // $('.btn-nav').removeClass('ng');

        fromAbove = 0;
      }
    });

  }

}
