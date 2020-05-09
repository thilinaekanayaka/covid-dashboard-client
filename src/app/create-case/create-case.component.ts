import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Districts } from '../districts';
import { Genders } from '../gender';
import { Statuses } from '../status';
import { SyncService } from '../sync.service';

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
  case: any;
  message: any;

  constructor(private formBuilder: FormBuilder, private syncService: SyncService) {
    this.districts = Districts;
    this.genders = Genders;
    this.statuses = Statuses;
    this.message = '';
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

  onSubmit(caseData: any) {
    this.case = {
      "name": caseData["name"],
      "age": caseData["age"],
      "gender": this.genders.indexOf(caseData["gender"]),
      "status": this.statuses.indexOf(caseData["status"]),
      "location": {
        "district": this.districts.indexOf(caseData["district"]),
        "address": caseData["address"]
      }
    }
    this.createCaseForm.reset();
    this.syncService.createCase(this.case).subscribe(data => {
      console.log("response", data["message"]);
      this.message = data["message"];
    });
  }
}
