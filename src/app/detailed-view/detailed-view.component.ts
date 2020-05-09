import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Districts } from '../districts';
import { SyncService } from '../sync.service';
import { Statuses } from '../status';
import { Genders} from '../gender';

@Component({
  selector: 'app-detailed-view',
  templateUrl: './detailed-view.component.html',
  styleUrls: ['./detailed-view.component.css']
})
export class DetailedViewComponent implements OnInit {
  caseID: any;
  district: any;
  districtID: any;
  statuses: any;
  genders: any;
  message:any;
  name: any = '';
  age: any = '';
  status:any = '';
  gender:any = '';
  address:any = '';

  constructor(private route: ActivatedRoute, private syncService: SyncService) { 
    this.caseID = this.route.snapshot.paramMap.get('id');
    this.statuses = Statuses;
    this.genders = Genders;
    this.message = '';
  }

  ngOnInit(): void {
    this.syncService.getCaseByID(this.caseID).subscribe(data => {
      this.districtID = data["location"]["district"];
      this.district = Districts[data["location"]["district"]];
      this.name = data["name"];
      this.age = data["age"];
      this.gender = this.genders[data["gender"]];
      this.status = this.statuses[data["status"]];
      this.address = data["location"]["address"];
    });
  }

  removeCase() {
    this.syncService.removeCase(this.caseID).subscribe(data => {
      this.message = data["message"];
    });
  }

}
