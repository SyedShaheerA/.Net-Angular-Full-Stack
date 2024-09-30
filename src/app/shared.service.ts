import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl= 'http://localhost:5190/api';

  constructor(private http:HttpClient) { }

  getDepList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Department');
  }

  addDepartment(val:any){
    return this.http.post(this.APIUrl+'/Department',val);
  }

  updateDepartment(val:any){
    return this.http.put(this.APIUrl+'/Department',val);
  }

  deleteDepartment(val:any){
    return this.http.delete(this.APIUrl+'/Department/(id)?id='+val);
  }

  getEmpList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Employee');
  }

  addEmployee(val:any){
    return this.http.post(this.APIUrl+'/Employee',val);
  }

  updateEmployee(val:any){
    return this.http.put(this.APIUrl+'/Employee',val);
  }

  deleteEmployee(val:any){
    return this.http.delete(this.APIUrl+'/Employee/'+val);
  }

  getAllDepartmentNames():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Department/GetAllDepartmentName');
  }


  getCmpList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Customer');
  }

  addCustomer(val:any){
    return this.http.post(this.APIUrl+'/Customer',val);
  }

  updateCustomer(val:any){
    return this.http.put(this.APIUrl+'/Customer',val);
  }

  deleteCustomer(val:any){
    return this.http.delete(this.APIUrl+'/Customer/(id)?id='+val);
  }

  getBranchList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Branch');
  }

  getCityList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/City');
  }

  getCountryList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Country');
  }

  getSalespersonList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Salesperson');
  }
}
