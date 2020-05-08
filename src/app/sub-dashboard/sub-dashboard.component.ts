import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Districts } from '../districts';
import { SyncService } from '../sync.service';

@Component({
  selector: 'app-sub-dashboard',
  templateUrl: './sub-dashboard.component.html',
  styleUrls: ['./sub-dashboard.component.css']
})
export class SubDashboardComponent implements OnInit {
  cases:any;
  district: any;

  constructor(private route: ActivatedRoute, private syncService: SyncService) { }

  ngOnInit(): void {
    this.district = Districts[this.route.snapshot.paramMap.get('id')];
    this.syncService.getCasesByDistrict(this.route.snapshot.paramMap.get('id')).subscribe(data => {
      console.log(data);
      this.cases = data;
    });
  }

}
