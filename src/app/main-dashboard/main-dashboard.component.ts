import { Component, OnInit } from '@angular/core';
import { SyncService } from '../sync.service';
import { Districts } from '../districts';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent implements OnInit {
  cases:any;
  districts:any;

  constructor(private syncService: SyncService) {
    this.districts = Districts;
  }

  ngOnInit(): void {
    this.syncService.getNumbersByDistrict().subscribe(data => {
      this.cases = data["cases"];
    });
  }

}
