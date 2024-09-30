import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { AddEditDepComponent } from './department/add-edit-dep/add-edit-dep.component';

import { CustomerComponent } from './customer/customer.component';
import { AddEditCmpComponent } from './customer/add-edit-cmp/add-edit-cmp.component';

const routes: Routes = [
  {path:'AddEditCustomer', component:AddEditCmpComponent},
  {path:'customer', component:CustomerComponent},
  {path:'AddEditDepComponent', component:AddEditDepComponent},
  {path:'employee', component:EmployeeComponent},
  {path:'department', component:DepartmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
