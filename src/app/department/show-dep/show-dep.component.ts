import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrl: './show-dep.component.css'
})
export class ShowDepComponent implements OnInit{
  constructor(private service:SharedService, private router:Router){}

  DepartmentList:any=[];
  dep:any;
  
  ngOnInit(): void {
    this.refreshDepList();
  }

  deleteClick(item: any){
    
    this.dep=item;
    console.log(this.dep.DepartmentId);
    this.service.deleteDepartment(this.dep.DepartmentId).subscribe(data=>{alert(data.toString());
      this.refreshDepList();
    })
  }

  addClick(){
    this.dep={
      DepartmentId:0,
      DepartmentName:""
    }
    this.router.navigateByUrl('/AddEditDepComponent', { state: { DepartmentId:0,
      DepartmentName:"" } });
    // this.router.navigate(['/AddEditDepComponent',{
    //   DepartmentId:0,
    //   DepartmentName:""
    // } ]);
  }
  refreshDepList(){
    this.service.getDepList().subscribe(
      data=>{
        this.DepartmentList= data;
      }
    )
  }


}
