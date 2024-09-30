import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-edit-dep',
  templateUrl: './add-edit-dep.component.html',
  styleUrl: './add-edit-dep.component.css'
})
export class AddEditDepComponent {
  constructor(private service:SharedService, private activatedroute:ActivatedRoute, private location:Location, private router:Router) {
    
  }

  product:any;

  @Input() dep:any;
  DepartmentId:string | undefined;
  DepartmentName:string | undefined;

  ngOnInit(): void{

    
    console.log(this.location.getState());

    
  }

  addDepartment(){
    var val= {
        DepartmentId: this.DepartmentId, 
        DepartmentName:this.DepartmentName }
    this.service.addDepartment(val).subscribe(res=>alert(res.toString))

    this.router.navigateByUrl('/department')
  }
}
