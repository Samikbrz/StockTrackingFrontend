import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Company } from 'src/app/models/company';
import { ProductAcceptance } from 'src/app/models/productAcceptance';
import { User } from 'src/app/models/user';
import { CompanyService } from 'src/app/services/company.service';
import { ProductAcceptanceService } from 'src/app/services/product-acceptance.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-product-acceptance-add',
  templateUrl: './product-acceptance-add.component.html',
  styleUrls: ['./product-acceptance-add.component.css']
})
export class ProductAcceptanceAddComponent implements OnInit {

  productAcceptanceAddForm:FormGroup;  
  companies:Company[];
  users:User[];   
  productAcceptances:ProductAcceptance[];  

  constructor(
    private formBuilder:FormBuilder,
    private productAcceptanceService:ProductAcceptanceService,
    private companyService:CompanyService,
    private userService:UserService,
    private toastrService:ToastrService

  ) { }

  ngOnInit(): void {   
    this.createProductAcceptanceAddForm();    
    this.getCompanies();
    this.getUsers();   
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

  createProductAcceptanceAddForm() {
    this.productAcceptanceAddForm = this.formBuilder.group({   
      productRegistrationNumber:['',Validators.required],
      productName:['',Validators.required],
      count:['',Validators.required],
      unitPrice:['',Validators.required],
      totalPrice:['',Validators.required],
      acceptanceDate:['',Validators.required],
      userId:['',Validators.required],
      companyId:['',Validators.required],
      barcode:['',Validators.required],               
    });   
  }

  addProductAcceptance(){
    if (this.productAcceptanceAddForm.valid) {
      let productAcceptanceModel = Object.assign({}, this.productAcceptanceAddForm.value);      
      this.productAcceptanceService.add(productAcceptanceModel).subscribe((response)=>{
        this.toastrService.success(response.message,"Ba??ar??l??");   
        window.location.reload(); 
        this.toastrService.info("Depo stok da????l??m??na ilgili ??r??n?? yerle??tirmeyi unutmay??n??z!","Bilgilendirme");    
      },responseError=>{                
        if(responseError.error.Message.length>0){
          this.toastrService.error(responseError.error.Message,"Hata");
        }       
      });      
    }
  }

}
