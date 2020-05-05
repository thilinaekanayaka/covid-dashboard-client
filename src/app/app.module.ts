import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule }    from '@angular/common/http';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { SubDashboardComponent } from './sub-dashboard/sub-dashboard.component';
import { DetailedViewComponent } from './detailed-view/detailed-view.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MainDashboardComponent,
    SubDashboardComponent,
    DetailedViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
