import 'rxjs/Rx';

import { Component, OnInit } from '@angular/core';
import { Response, Http } from '@angular/http';

import { saveAs } from 'file-saver/FileSaver';


import { Candidate } from './candidate.model';
import { CandidateService } from './candidare.service';

declare var jquery: any;
declare var $: any;


@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html'
})
export class CandidateComponent implements OnInit {


  candidates: Candidate[]

  constructor(private candidateService: CandidateService, private http: Http ) { }

  ngOnInit() {
    this.candidateService.getCandidates()
      .subscribe(
        (candidates: any[]) => this.candidates = candidates,
        (err) => console.log(err)
      );
  }


  
  triggerMore(event, id){

    if (event.path[0].className === 'material-icons' || 
        event.path[0].className === 'right balance'){ 
      return null;
    }

    $('div#'+ id +'.ng-item').toggleClass('limit-height');
  }

  triggerDownload(id: number) {

    const api = 'http://localhost:52617/api/candidate/download/';
    
    window.open(api + id, '_blank');

    // this.candidateService.getCandidateDownload(id)
    //   .subscribe(
    //     (data) => {

    //       console.log(data.fileExtension);

    //       const blob = new Blob([data], {type: data.type });
    //       saveAs(blob, 'Arquivo.' + data.fileExtension);
    //     }
    //   );


    console.log('download');
  }

  // downloadFile(data: Response) {
  //   var blob = new Blob([data], { type: 'text/csv' });
  //   var url = window.URL.createObjectURL(blob);
  //   window.open(url);
  // }


}
