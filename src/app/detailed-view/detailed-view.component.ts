import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Districts } from '../districts';
import { SyncService } from '../sync.service';

@Component({
  selector: 'app-detailed-view',
  templateUrl: './detailed-view.component.html',
  styleUrls: ['./detailed-view.component.css']
})
export class DetailedViewComponent implements OnInit {
  caseID: any;
  district: any;
  districtID: any;
  name: any = '';
  age: any = '';

  constructor(private route: ActivatedRoute, private syncService: SyncService) { 
    this.caseID = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.syncService.getCaseByID(this.caseID).subscribe(data => {
      console.log(data)
      this.districtID = data["location"]["district"];
      this.district = Districts[data["location"]["district"]];
      this.name = data["name"];
      this.age = data["age"];
    });
  }

}
