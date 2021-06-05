import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Company } from 'src/app/models/company';
import { ProductAcceptance } from 'src/app/models/productAcceptance';
import { ProductAcceptanceDetail } from 'src/app/models/productAcceptanceDetail';
import { User } from 'src/app/models/user';
import { CompanyService } from 'src/app/services/company.service';
import { ProductAcceptanceService } from 'src/app/services/product-acceptance.service';
import { ProductOutputService } from 'src/app/services/product-output.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-product-output-add',
  templateUrl: './product-output-add.component.html',
  styleUrls: ['./product-output-add.component.css']
})
export class ProductOutputAddComponent implements OnInit {

  productOutputAddForm:FormGroup;  
  companies:Company[];
  users:User[];   
  productAcceptances:ProductAcceptanceDetail[];
  productAcceptance:ProductAcceptanceDetail;  

  constructor(
    private formBuilder:FormBuilder,
    private productOutputService:ProductOutputService,
    private productAcceptanceService:ProductAcceptanceService,
    private companyService:CompanyService,
    private userService:UserService,
    private toastrService:ToastrService

  ) { }

  ngOnInit(): void {   
    this.createProductOutputAddForm();    
    this.getCompanies();
    this.getUsers(); 
    this.getProducts();  
  }   

  getProducts(){
    this.productAcceptanceService.getProductAcceptances().subscribe(response=>{
      this.productAcceptances=response.data;
    })
  }

  getCompanies(){
    this.companyService.getCompanies().subscribe(response=>{
      this.companies=response.data
    })
  }

  getUsers(){
    this.userService.getUsers().subscribe(response=>{
      this.users=response.data
    })
  }

  createProductOutputAddForm() {
    this.productOutputAddForm = this.formBuilder.group({   
      exitNumber:['',Validators.required],
      productAcceptanceId:['',Validators.required],
      count:['',Validators.required],
      unitPrice:['',Validators.required],
      totalPrice:['',Validators.required],
      date:['',Validators.required],
      userId:['',Validators.required],
      companyId:['',Validators.required],
      barcode:['',Validators.required],                 
    });   
  }

  addProductOutput(){
    if (this.productOutputAddForm.valid) {      
      let productOutputModel = Object.assign({}, this.productOutputAddForm.value);     
      this.productOutputService.add(productOutputModel).subscribe((response)=>{
        this.toastrService.success(response.message,"Başarılı");   
        window.location.reload();            
      },(responseError)=>{        
        this.toastrService.error(responseError.error.message,"Hata");
      });      
    }
  }

}
