import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';
import { EmployeePageComponent } from './employee-page/employee-page.component';
import { EmployeesComponent } from './employees/employees.component';


const routes: Routes = [
  { path: '', redirectTo: '/employee-page', pathMatch: 'full' },
  { path: 'employee-page', component:  EmployeePageComponent},
  { path: 'employees', component:  EmployeesComponent},
  { path: 'addemployee', component:  AddemployeeComponent},
  { path: 'employee-info', component:  EmployeeInfoComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
