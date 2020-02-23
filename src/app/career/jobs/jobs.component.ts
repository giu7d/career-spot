import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Job } from './job.model';
import { JobService } from './job.service';

import { Field } from '../fields/field.model';
import { FieldService } from '../fields/field.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  providers: [JobService, FieldService]
})

export class JobsComponent implements OnInit, OnDestroy {

  jobs: Job[];
  fields: Field[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private jobService: JobService,
    private fieldService: FieldService
  ) { }

  ngOnInit() {
    if (this.isAllJobs()) {
      this.jobs = this.jobService.Jobs;
      this.fields = this.fieldService.Fields;
    }
    else {
      const routeParam = +this.route.snapshot.params['id'];

      this.jobs = this.jobService.getJobByCategory(routeParam);
      this.fields = this.fieldService.getFieldById(routeParam);
    }
  }

  ngOnDestroy() { }

  emptyCategory(): boolean {
    return this.jobs.length === 0;
  }

  isAllJobs(): boolean{
    return this.router.url === '/careers/jobs';
  }

}
