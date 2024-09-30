import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-cmp',
  templateUrl: './show-cmp.component.html',
  styleUrl: './show-cmp.component.css'
})
export class ShowCmpComponent implements OnInit{
  
  constructor(private service:SharedService, private router:Router){}

  CustomerList:any=[];
  SalesPersonList:any=[];
  Search1: string | undefined;
  SalespersonPersonID: string | undefined;
  StatusDropDown: string | undefined;
  
  filteredList: any= [];

  cmp:any;
  

  ngOnInit(): void {
    this.refreshDepList();
  }

  refreshDepList(){
    this.service.getCmpList().subscribe(data=>
    {
      this.CustomerList= data;
      this.filteredList=data;
    }
    )

    this.service.getSalespersonList().subscribe(data=>
    {
      this.SalesPersonList= data;
    }
    )

    
  }

  filterSalesPerson(){
    console.log('Selected Salesperson:', this.SalespersonPersonID); 
   
    console.log(this.filteredList);
    // Filter cities based on the selected CountryID
    this.filteredList = this.filteredList.filter((per: any) => {
       console.log(per.SalespersonID); // This logs the CountryID of each city

       return per.SalespersonID == this.SalespersonPersonID; // Filter condition
   });
     console.log('Filtered City List:', this.filteredList); // Log the filtered city list
  }

  search(){
    console.log('Searched:', this.Search1); 
   
    console.log(this.filteredList);
    // Filter cities based on the selected CountryID
    this.filteredList = this.filteredList.filter((per: any) => {
       console.log(per.SalespersonID); // This logs the CountryID of each city

       return per.CustomerID == this.Search1 || per.CustomerName == this.Search1 || per.ArabicName== this.Search1 || per.TaxRegisterationNumber== this.Search1 || per.CRNumber== this.Search1 || per.PrimaryContact==this.Search1 || per.MobileNumber_== this.Search1; // Filter condition
   });
     console.log('Filtered City List:', this.filteredList); // Log the filtered city list
  }
  
  filter()
  {
    this.CustomerList= this.filteredList;
  }

  filterStatus(){
    console.log('Selected Status:', this.StatusDropDown); 
   
    console.log(this.filteredList);
    // Filter cities based on the selected CountryID
    this.filteredList = this.filteredList.filter((per: any) => {
       console.log(per.Statuss); // This logs the CountryID of each city

       return per.Statuss == this.StatusDropDown; // Filter condition
   });
     console.log('Filtered City List:', this.filteredList); // Log the filtered city list
  }

  addClick(){
    this.router.navigateByUrl('/AddEditCustomer', { state: { CustomerID:0 } });
    this.refreshDepList();
  }

  updateCustomer(CustomerID_: number){
    this.router.navigateByUrl('/AddEditCustomer', { state: { CustomerID:CustomerID_ } });
    this.refreshDepList();
  }

  DeleteCustomer(CustomerID_: number){
    this.service.deleteCustomer(CustomerID_).subscribe(data=>{alert(data.toString());
      this.refreshDepList();
    })
  }









  getSalespersonName(salespersonID: number): string {

  // console.log('Customer SalespersonID:', salespersonID);

  // console.log('SalesPersonList:', this.SalesPersonList);

  const salesperson = this.SalesPersonList.find((sp: any) => +sp.SalespersonId === +salespersonID);

  // console.log('Matched Salesperson:', salesperson);
  
  return salesperson ? salesperson.SalespersonName : 'Unknown';
  }

}
