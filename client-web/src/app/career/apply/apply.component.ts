import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Job } from '../jobs/job.model';
import { JobService } from '../jobs/job.service';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  providers: [JobService]
})
export class ApplyComponent implements OnInit {

  jobs: Job[];

  constructor(
    private route: ActivatedRoute,
    private jobService: JobService
  ) {}

  ngOnInit() {
    const routeParam = +this.route.snapshot.params['id'];
    this.jobs = this.jobService.getJobById(routeParam);

  }

}
