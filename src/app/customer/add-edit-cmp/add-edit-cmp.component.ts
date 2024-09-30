import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Location } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IntegerType } from 'mongodb';
@Component({
  selector: 'app-add-edit-cmp',
  templateUrl: './add-edit-cmp.component.html',
  styleUrl: './add-edit-cmp.component.css'
})
export class AddEditCmpComponent {
  constructor(private service:SharedService, private activatedroute:ActivatedRoute,private commonModule:CommonModule, private location:Location, private router:Router) {
    
  }

  CustomerId_: string | undefined;
  SalespersonId_:string | undefined;
  Salesperson_:string | undefined;
  CustomerName_:string | undefined;
  ArabicName_:string | undefined;
  TaxRegisterationNumber_: string | undefined;
  TaxRegisterationDate_:string | undefined;
  CRNumber_:string | undefined;
  PrimaryContact_:string | undefined;
  BranchID_:string | undefined;
  MobileNumber_: string | undefined;
  Email_: string | undefined;
  Website_: string | undefined;
  TaxID_: string | undefined;
  PaymentTerms_: string | undefined;
  Statuss_: string | undefined;
  CountrID_: string | undefined;
  CityID_: string | undefined;
  Region_: string | undefined;
  Street_: string | undefined;
  Area_: string | undefined;
  AdditionalStreet_: string | undefined;
  AdditionalNumber_: string | undefined;
  BuildingNumber_: string | undefined;
  UnitNumb_: string | undefined;
  PostalCode_: string | undefined;

  SalesPersonList:any=[];
  BranchList:any=[];
  CityList: any=[];
  CountryList: any=[];
  filteredCityList: any[] = [];

  customerID: string | undefined;
  TaxId:any=[
    {name: 'EIN'},
    {name: 'SSN'},
    {name: 'TIN'},
    {name: 'PTIN'},
    {name: 'ATIN'},
  ]
  state2: string | any;

  ngOnInit(): void{

    this.refreshDepList();
    console.log(this.location.getState());
    const state= this.location.getState() as any;
    console.log(state.CustomerID);
    this.state2= state.CustomerID;
    console.log(this.SalesPersonList);
  }


  refreshDepList(){

    this.service.getSalespersonList().subscribe(data=>
    {
      this.SalesPersonList= data;
    }
    )

    this.service.getBranchList().subscribe(data=>
    {
      this.BranchList= data;
    }
    )

    this.service.getCountryList().subscribe(data=>
    {
      this.CountryList= data;
    }
    )

    this.service.getCityList().subscribe(data=>
    {
      this.CityList= data;
    }
    )
  }

  Update(){
    var val= {
      CustomerID: this.CustomerId_,
      SalespersonID: this.SalespersonId_,
      CustomerName: this.CustomerName_,
      ArabicName: this.ArabicName_,
      TaxRegistrationNumber: this.TaxRegisterationNumber_,
      TaxRegistrationDate: this.TaxRegisterationDate_,
      CRNumber: this.CRNumber_,
      PrimaryContact: this.PrimaryContact_,
      BranchID: this.BranchID_,
      MobileNumber: this.MobileNumber_,
      Email: this.Email_,
      Website: this.Website_,
      TaxID: this.TaxID_,
      PaymentTerms: this.PaymentTerms_,
      Statuss: this.Statuss_,
      CountryID: this.CountrID_,
      CityID: this.CityID_,
      Region: this.Region_,
      Street: this.Street_,
      Area: this.Area_,
      AdditionalStreet: this.AdditionalStreet_,
      AdditionalNumber: this.AdditionalNumber_,
      BuildingNumber: this.BuildingNumber_,
      UnitNumb: this.UnitNumb_,
      PostalCode: this.PostalCode_
      }


      this.service.updateCustomer(val).subscribe(res=>alert("updated successfully"))
      this.router.navigateByUrl('/customer')

  }

  save(){
    console.log(this.SalespersonId_)
    console.log(this.TaxRegisterationNumber_)

    var val= {
    CustomerID: this.CustomerId_,
    SalespersonID: this.SalespersonId_,
    CustomerName: this.CustomerName_,
    ArabicName: this.ArabicName_,
    TaxRegistrationNumber: this.TaxRegisterationNumber_,
    TaxRegistrationDate: this.TaxRegisterationDate_,
    CRNumber: this.CRNumber_,
    PrimaryContact: this.PrimaryContact_,
    BranchID: this.BranchID_,
    MobileNumber: this.MobileNumber_,
    Email: this.Email_,
    Website: this.Website_,
    TaxID: this.TaxID_,
    PaymentTerms: this.PaymentTerms_,
    Statuss: this.Statuss_,
    CountryID: this.CountrID_,
    CityID: this.CityID_,
    Region: this.Region_,
    Street: this.Street_,
    Area: this.Area_,
    AdditionalStreet: this.AdditionalStreet_,
    AdditionalNumber: this.AdditionalNumber_,
    BuildingNumber: this.BuildingNumber_,
    UnitNumb: this.UnitNumb_,
    PostalCode: this.PostalCode_
    }

    this.service.addCustomer(val).subscribe(res=>alert("added successfully"))

    this.router.navigateByUrl('/customer')
  }






  filterCities() {
        console.log('Selected CountryID:', this.CountrID_); // Log the selected country ID
        console.log('City List:', this.CityList); // Log the entire City List
        this.CityList.forEach((city: any) => {
          console.log(city.CountryID);
      });

        
        // Filter cities based on the selected CountryID
        this.filteredCityList = this.CityList.filter((city: any) => {
          console.log(city.CountryID); // This logs the CountryID of each city

          return city.CountryID == this.CountrID_; // Filter condition
      });
        console.log('Filtered City List:', this.filteredCityList); // Log the filtered city list
    }
}
