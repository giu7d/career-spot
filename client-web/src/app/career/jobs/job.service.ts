import { Injectable } from '@angular/core';
import { Job } from './job.model';

@Injectable()
export class JobService{

  private jobs: Job[] = [
    new Job(0, 'Programador Java/C++/Lua', 'lorem ipsum', true, 0),
    new Job(1, 'Desenvolvedor Front-End', 'lorem ipsum', true, 0),
    new Job(2, 'Engenheiro de Software', 'lorem ipsum', true, 0),
    new Job(3, 'Analista de Sistemas', 'lorem ipsum', true, 0),

    new Job(4, 'Representante de Vendas', 'lorem ipsum', true, 1),
    new Job(5, 'Coordenador de Suporte Tecnico', 'lorem ipsum', true, 1),

    new Job(6, 'Analista de Marketing e Comunicação', 'lorem ipsum', true, 2),

    new Job(7, 'Designer UI/UX', 'lorem ipsum', true, 3)
  ];

  get Jobs() {
    return this.jobs.filter(
      job => job.St === true
    );
  }

  getJobById(id: number) {
    return this.jobs.filter(
      job => job.Id === id && job.St === true
    );
  }

  getJobByCategory(id: number) {
    return this.jobs.filter(
      job => job.Categorie === id && job.St === true
    );
  }
}
