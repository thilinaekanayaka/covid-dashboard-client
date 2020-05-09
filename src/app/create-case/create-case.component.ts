import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Districts } from '../districts';
import { Genders } from '../gender';
import { Statuses } from '../status';

@Component({
  selector: 'app-create-case',
  templateUrl: './create-case.component.html',
  styleUrls: ['./create-case.component.css']
})
export class CreateCaseComponent implements OnInit {
  createCaseForm: any;
  districts: any;
  genders: any;
  statuses; any;

  constructor(private formBuilder: FormBuilder) {
    this.districts = Districts;
    this.genders = Genders;
    this.statuses = Statuses;
    this.createCaseForm = this.formBuilder.group({
      name: '',
      age: '',
      gender: '',
      status: '',
      district: '',
      address: ''
    });
  }

  ngOnInit(): void {
  }

  onSubmit(customerData: any) {
    this.createCaseForm.reset();
    console.log('submitted', customerData);
  }
}
