import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Districts } from '../districts';
import { SyncService } from '../sync.service';
import { Statuses } from '../status';
import { ConnectionService } from '../connection.service';

@Component({
  selector: 'app-sub-dashboard',
  templateUrl: './sub-dashboard.component.html',
  styleUrls: ['./sub-dashboard.component.css']
})
export class SubDashboardComponent implements OnInit {
  cases: any;
  districtID: any;
  district: any;
  statuses: any;

  constructor(private route: ActivatedRoute, private syncService: SyncService, private connectionService: ConnectionService) {
    this.districtID = this.route.snapshot.paramMap.get('id');
    this.statuses = Statuses;
  }

  ngOnInit(): void {
    this.district = Districts[this.districtID];
    this.connectionService.checkOnline$().subscribe(isOnline => {
      if (isOnline) {
        this.syncService.getCasesByDistrict(this.districtID).subscribe(data => {
          this.cases = data;
          localStorage.setItem('sub-dashboard-district-' + this.districtID, JSON.stringify(this.cases));
        });
      } else {
        this.cases = JSON.parse(localStorage.getItem('sub-dashboard-district-' + this.districtID));
      }
    });
  }

}
