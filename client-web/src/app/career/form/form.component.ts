import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Job } from '../jobs/job.model';
import { JobService } from '../jobs/job.service';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  providers: [JobService]
})

export class FormComponent implements OnInit {

  jobs: Job[];
  city: string;
  state: string;

  constructor(
    private route: ActivatedRoute,
    private jobService: JobService,
    private http: Http
  ) { }

  ngOnInit() {
    const routeParam = +this.route.snapshot.params['id'];
    this.jobs = this.jobService.getJobById(routeParam);
  }

  onSubmit(form: NgForm) {
    const candidate = form.value;
    const api = 'http://localhost:52617/api/candidate';
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    const formData = new FormData();
    const file = $('#file').get(0).files;

    // candidate.name = 'teste';
    // candidate.email = 'teste@teste.com';
    // candidate.phone = '(19) 99999-9999';
    // candidate.adress = '666, Av. XXX, Bairro X';
    // candidate.cep = '13440-000';
    // candidate.city = 'Saltinho';
    // candidate.state = 'Paraná';

    candidate.city = this.city;
    candidate.state = this.state;
    candidate.jobApply = this.jobs[0].Name;

    formData.append('file', file[0]);
    formData.append('candidate', JSON.stringify(candidate));

    this.http.post( api, formData, headers)
      .subscribe(
      () => {
        form.reset();
        console.log('x');
      });
  }


  addInput(id: string) {
    $(id).parent().removeClass('hide');
    $(id + 'Trigger').hide();
  }

  addAdress(form: NgForm) {
    const cep = form.value.cep,
          api = 'http://api.zippopotam.us/br/';

    if (cep != null && /\d{5}-?\d{3}/.test(cep)) {

      $('#adressHiddenContainer1').removeClass('hide');
      $('#adressHiddenContainer2').removeClass('hide');

      this.http.get(api + cep)
        .map(response => response.json())
        .subscribe(
        (response) => {
          this.city = response.places[0]['place name'];
          this.state = response.places[0]['state'];
          form.value.city = response.places[0]['place name'];
          form.value.state = response.places[0]['state'];
        });
    }
  }

  setMask() {
    const maskBehavior = function(val) {
      return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
    },
          options = {
            onKeyPress: function(val, e, field, option) {
              field.mask(maskBehavior.apply({}, arguments), options);
            }
          };

    $('#cep').mask('99999-999');
    $('#phone').mask(maskBehavior, options);
    $('#phone2').mask(maskBehavior, options);
  }

  setFileName(){
    const file = $('#file')[0].files[0];
    if (file !== null || file !== undefined){
      $('#fileLabel').text(file.name);
    }
    else{
        $('#fileLabel').text('Selecionar Arquivo');
    }
  }


}
