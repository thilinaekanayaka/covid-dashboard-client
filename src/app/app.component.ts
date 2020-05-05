import { Component } from '@angular/core';
import { SyncService } from './sync.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Corvid-19 Status Dashboard';

  constructor(private syncService: SyncService) {
    // this.syncService.test().subscribe(data => {
    //   console.log("AppComponent test : " + JSON.stringify(data));
    // })

    // this.syncService.test2().subscribe(data => {
    //   console.log("AppComponent test 2 : " + JSON.stringify(data));
    // })

    // this.syncService.getAllCases().subscribe(data => {
    //   console.log(data);
    // });
  }
}
