import { Directive, Input, OnInit } from '@angular/core';
import { ProgressBarComponent } from './progress-bar.component';

declare var jquery: any;
declare var $: any;

@Directive({
  selector: '[appProgressbar]'
})

export class ProgressBarDirective implements OnInit {

  page = {
    step: null,
    title: ['Áreas de Trabalho', 'Vagas Disponiveis', 'Candidatar', 'Formulario']
  };

  @Input() pagenation: number;

  constructor() {}

  ngOnInit() {
    this.page.step = this.pagenation;

    $('#pageTitle').text(this.page.title[this.page.step]); // GAMBIARRA

    this.activateProgress();
  }


  activateProgress() {

    switch (this.page.step) {
      case 0: { // Areas
        $('#fst').addClass('now').removeClass('active');
        $('#snd').removeClass('now active');
        $('#trd').removeClass('now active');

        $('#pageTitle').show();
        $('#applyButton').hide();

        break;
      }
      case 1: { // Vagas
        $('#fst').addClass('active').removeClass('now');
        $('#snd').addClass('now').removeClass('active');
        $('#trd').removeClass('now active');

        $('#pageTitle').show();
        $('#applyButton').hide();
        break;
      }
      case 2: { // Apply

        // Adicionar botão

        $('#pageTitle').hide();
        $('#applyButton').show();

        // Prevenção
        $('#fst').addClass('active').removeClass('now');
        $('#snd').addClass('now').removeClass('active');
        $('#trd').removeClass('now active');
        break;
      }
      case 3: { // Form
        $('#fst').addClass('active');
        $('#snd').addClass('active').removeClass('now');
        $('#trd').addClass('now').removeClass('active');

        $('#pageTitle').show();
        $('#applyButton').hide();
        break;
      }
    }

  }


}
