import { Component, OnInit } from '@angular/core';
import { Field } from './field.model';
import { FieldService } from './field.service';

@Component({
  selector: 'app-fields',
  templateUrl: './fields.component.html',
  providers: [FieldService]
})

export class FieldsComponent implements OnInit {

  fields: Field[];

  constructor(private fieldService: FieldService) {}

  ngOnInit() {
    this.fields = this.fieldService.Fields;
  }

}
