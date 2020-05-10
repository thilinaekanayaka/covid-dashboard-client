import { Component } from '@angular/core';
import { ConnectionService } from './connection.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Corvid-19 Status Dashboard';
  offlineMessage: any;
  offline: Boolean;

  constructor(private connectionService: ConnectionService) {
    this.offlineMessage = '';
    this.offline = false;
  }

  ngOnInit(): void {
    this.connectionService.checkOnline().subscribe(isOnline => {
      if (isOnline) {
        this.offlineMessage = '';
        this.offline = false;
      }
      else {
        this.offlineMessage = "You are offline. Showing cached data...";
        this.offline = true;
      }
    });
  }
}
