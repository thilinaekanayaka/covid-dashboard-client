import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { SyncService } from '../sync.service';
import { Districts } from '../districts';
import { Genders } from '../gender';
import { Statuses } from '../status';

@Component({
  selector: 'app-edit-case',
  templateUrl: './edit-case.component.html',
  styleUrls: ['./edit-case.component.css']
})
export class EditCaseComponent implements OnInit {
  caseID: any;
  editCaseForm: any;
  districts: any;
  genders: any;
  statuses; any;
  case: any;
  message: any;

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private syncService: SyncService) {
    this.caseID = this.route.snapshot.paramMap.get('id');
    this.districts = Districts;
    this.genders = Genders;
    this.statuses = Statuses;
    this.message = '';
    this.syncService.getCaseByID(this.caseID).subscribe(data => {
      console.log("getCaseByID", data)
      this.case = data;
      this.editCaseForm = this.formBuilder.group({
        id: [{ value: this.caseID, disabled: true }, Validators.required],
        name: [data["name"], Validators.required],
        age: [data["age"], Validators.required],
        gender: [this.genders[data["gender"]], Validators.required],
        status: [this.statuses[data["status"]], Validators.required],
        district: [this.districts[data["location"]["district"]], Validators.required],
        address: [data["location"]["address"], Validators.required]
      });
    });
  }

  ngOnInit(): void {
  }

  onSubmit(caseData: any) {
    console.log("submit", caseData)
    //   this.case = {
    //     "name": caseData["name"],
    //     "age": caseData["age"],
    //     "gender": this.genders.indexOf(caseData["gender"]),
    //     "status": this.statuses.indexOf(caseData["status"]),
    //     "location": {
    //       "district": this.districts.indexOf(caseData["district"]),
    //       "address": caseData["address"]
    //     }
    //   }
    //   this.editCaseForm.reset();
    //   this.syncService.createCase(this.case).subscribe(data => {
    //     this.message = data["message"];
    //   });
  }

}
