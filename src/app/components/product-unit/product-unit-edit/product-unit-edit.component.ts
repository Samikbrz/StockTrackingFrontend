import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductUnit } from 'src/app/models/productUnit';
import { ProductUnitService } from 'src/app/services/product-unit.service';

@Component({
  selector: 'app-product-unit-edit',
  templateUrl: './product-unit-edit.component.html',
  styleUrls: ['./product-unit-edit.component.css']
})
export class ProductUnitEditComponent implements OnInit {
  
  productUnit:ProductUnit; 
  productUnitUpdateForm:FormGroup;  

  constructor(private toastrService:ToastrService,
    private productUnitService:ProductUnitService,
    private activatedRoute: ActivatedRoute,
    private formBuilder:FormBuilder) {
      this.activatedRoute.params.subscribe((params) => {
        if (params['productUnitId']) {
          this.getProductUnitById(params['productUnitId']);
        }
      });
    }

  ngOnInit(): void {
    this.createProductUnitEditForm();
  }

  createProductUnitEditForm(){
    this.productUnitUpdateForm=this.formBuilder.group({
      productUnitName:['',Validators.required]
    })
  }

  updateProductUnit(){    
    if(this.productUnitUpdateForm.valid){
      let productUnitModel = Object.assign({}, this.productUnitUpdateForm.value)
      productUnitModel.id=this.productUnit.id;
      this.productUnitService.update(productUnitModel).subscribe(
        (response) => {        
          this.toastrService.success('Firma güncellendi','Başarılı');          
          window.location.reload();                  
        },responseError=>{                
          if(responseError.error.Message.length>0){
            this.toastrService.error(responseError.error.Message,"Hata");
          }       
        }); 
    }else{
      this.toastrService.error('Form eksik', 'Hata');
    }
  }

  getProductUnitById(productUnitId:number){
    this.productUnitService.getProductUnitsById(productUnitId).subscribe((response)=>{
      this.productUnit=response.data[0];  
      console.log(response.data)    
      this.productUnitUpdateForm.setValue({
        productUnitName:this.productUnit.productUnitName             
      })
    });
  }
}
