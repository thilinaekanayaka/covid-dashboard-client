import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule }    from '@angular/common/http';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { SubDashboardComponent } from './sub-dashboard/sub-dashboard.component';
import { DetailedViewComponent } from './detailed-view/detailed-view.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateCaseComponent } from './create-case/create-case.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditCaseComponent } from './edit-case/edit-case.component';

@NgModule({
  declarations: [
    AppComponent,
    MainDashboardComponent,
    SubDashboardComponent,
    DetailedViewComponent,
    CreateCaseComponent,
    EditCaseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
