import { Component, OnInit } from '@angular/core';
import { SyncService } from '../sync.service';
import { Districts } from '../districts';
import { ConnectionService } from '../connection.service';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent implements OnInit {
  cases: any;
  districts: any;

  constructor(private syncService: SyncService, private connectionService: ConnectionService) {
    this.districts = Districts;
  }

  ngOnInit(): void {
    this.connectionService.checkOnline().subscribe(isOnline => {
      if (isOnline) {
        this.syncService.getNumbersByDistrict().subscribe(data => {
          this.cases = data["cases"];
          localStorage.setItem('main-dashboard-cases', JSON.stringify(this.cases));
        });
      } else {
        this.cases = JSON.parse(localStorage.getItem('main-dashboard-cases'));
      }
    });
  }

}
