import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Districts } from '../districts';
import { SyncService } from '../sync.service';
import { Statuses } from '../status';
import { Genders } from '../gender';
import { ConnectionService } from '../connection.service';

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
  message: any;
  name: any = '';
  age: any = '';
  status: any = '';
  gender: any = '';
  address: any = '';
  caseAvailability: Boolean;
  online: Boolean;

  constructor(private route: ActivatedRoute, private syncService: SyncService, private connectionService: ConnectionService) {
    this.caseID = this.route.snapshot.paramMap.get('id');
    this.statuses = Statuses;
    this.genders = Genders;
    this.message = '';
    this.caseAvailability = true;
    this.online = true;
  }

  ngOnInit(): void {
    this.connectionService.checkOnline().subscribe(isOnline => {
      if (isOnline) {
        this.online = true;
        this.syncService.getCaseByID(this.caseID).subscribe(data => {
          this.caseAvailability = true;
          this.districtID = data["location"]["district"];
          this.district = Districts[data["location"]["district"]];
          this.name = data["name"];
          this.age = data["age"];
          this.gender = this.genders[data["gender"]];
          this.status = this.statuses[data["status"]];
          this.address = data["location"]["address"];
          localStorage.setItem('detailed-view-case-' + this.caseID, JSON.stringify(data));
        });
      } else {
        this.online = false;
        let caseData = JSON.parse(localStorage.getItem('detailed-view-case-' + this.caseID));
        if (caseData) {
          this.districtID = caseData["location"]["district"];
          this.district = Districts[caseData["location"]["district"]];
          this.name = caseData["name"];
          this.age = caseData["age"];
          this.gender = this.genders[caseData["gender"]];
          this.status = this.statuses[caseData["status"]];
          this.address = caseData["location"]["address"];
        } else {
          this.caseAvailability = false;
        }
      }
    });
  }

  removeCase() {
    this.syncService.removeCase(this.caseID).subscribe(data => {
      this.message = data["message"];
    });
  }

}
