import { Injectable } from '@angular/core';
import {Field} from './field.model';

@Injectable()
export class FieldService{

  private fields: Field[] = [

    new Field(0, 'Desenvolvimento e Tecnologias', 'lorem ipsum', true),
    new Field(1, 'Vendas, Serviços e Suporte', 'lorem ipsum', true),
    new Field(2, 'Marketing e Comunicação', 'lorem ipsum', true),
    new Field(3, 'Design', 'lorem ipsum', true),
  ];

  get Fields() {
    return this.fields.filter(
      field => field.St === true
    );
  }

  getFieldById(id: number) {
    return this.fields.filter(
      field => field.Id === id
    );
  }
}
