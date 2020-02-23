import 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, Response, ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Candidate } from './candidate.model';


@Injectable()
export class CandidateService {

    constructor(private http: Http) {}

    getCandidates() {
        return this.http.get('http://localhost:52617/api/candidate')
            .map(
                (response: Response) => {
                    return response.json();
                }
            );
    }

    // getCandidateDownload(id: number) {
        
    //     const api = 'http://localhost:52617/api/candidate/download/';

    //     return this.http.get(api + id, { responseType: ResponseContentType.Blob })
    //         .map((response: Response) => {

    //             console.log(response.json());
                
    //             response.json().fileExtension = this.setExtention(response);

    //             return response.json();
    //         })
    // }

    // setExtention(data: Response) :string{
    //     if (data.json().type === 'application/pdf') return 'pdf';
    //     if (data.json().type === 'application/msword') return 'doc';
    //     if (data.json().type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') return 'docx';
    // }


    getCandidateById(id: number) {
        return this.http.get('http://localhost:52617/api/candidate/' + id)
            .map(
            (response: Response) => {
                return response.json();
            }
        );
    }
}
