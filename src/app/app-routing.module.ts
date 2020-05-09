import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { SubDashboardComponent } from './sub-dashboard/sub-dashboard.component';
import { DetailedViewComponent } from './detailed-view/detailed-view.component';
import { CreateCaseComponent } from './create-case/create-case.component';
import { EditCaseComponent } from './edit-case/edit-case.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: MainDashboardComponent },
  { path: 'district-dashboard/:id', component: SubDashboardComponent },
  { path: 'case-detailed/:id', component: DetailedViewComponent },
  { path: 'create-case', component: CreateCaseComponent },
  { path: 'edit-case/:id', component: EditCaseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }