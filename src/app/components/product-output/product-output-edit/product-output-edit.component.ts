import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Company } from 'src/app/models/company';
import { ProductAcceptanceDetail } from 'src/app/models/productAcceptanceDetail';
import { ProductOutputDetail } from 'src/app/models/productOutputDetail';
import { User } from 'src/app/models/user';
import { CompanyService } from 'src/app/services/company.service';
import { ProductAcceptanceService } from 'src/app/services/product-acceptance.service';
import { ProductOutputService } from 'src/app/services/product-output.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-product-output-edit',
  templateUrl: './product-output-edit.component.html',
  styleUrls: ['./product-output-edit.component.css']
})
export class ProductOutputEditComponent implements OnInit {

  productOutputEditForm:FormGroup;  
  companies:Company[];
  users:User[];   
  productAcceptances:ProductAcceptanceDetail[];    
  productOutput:ProductOutputDetail;

  constructor(
    private formBuilder:FormBuilder,
    private productOutputService:ProductOutputService,
    private productAcceptanceService:ProductAcceptanceService,
    private companyService:CompanyService,
    private userService:UserService,
    private toastrService:ToastrService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe((params) => {
      if (params['productOutputId']) {
        this.getProductOutputById(params['productOutputId']);
      }
    });
   }

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
    this.productOutputEditForm = this.formBuilder.group({   
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

  updateProductOutput(){
    if (this.productOutputEditForm.valid) {      
      let productOutputModel = Object.assign({}, this.productOutputEditForm.value);
      productOutputModel.id=this.productOutput.id;     
      this.productOutputService.update(productOutputModel).subscribe((response)=>{
        this.toastrService.success(response.message,"Başarılı");   
        window.location.reload();            
      },(responseError)=>{  
        console.log(responseError)      
        this.toastrService.error(responseError.error.message,"Hata");
      });      
    }
  }

  getProductOutputById(productOutputId:number){
    this.productOutputService.getProductOutputById(productOutputId).subscribe((response)=>{
      this.productOutput=response.data[0];
      this.productOutputEditForm.setValue({
        exitNumber:this.productOutput.exitNumber, 
        productAcceptanceId:this.productOutput.productAcceptanceId,
        count:this.productOutput.count,
        unitPrice:this.productOutput.unitPrice,
        totalPrice:this.productOutput.totalPrice,
        date:this.productOutput.date,
        userId:this.productOutput.userId,
        companyId:this.productOutput.companyId, 
        barcode:this.productOutput.barcode,      
      })
    });
  }

}
