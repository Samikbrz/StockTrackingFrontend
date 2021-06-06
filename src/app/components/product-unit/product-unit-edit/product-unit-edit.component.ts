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
  
  productUnits:ProductUnit; 
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
      productUnitModel.id=this.productUnits.id;
      this.productUnitService.update(productUnitModel).subscribe(
        (response) => {        
          this.toastrService.success('Firma güncellendi','Başarılı');          
          window.location.reload();                  
        },responseError=>{  
          if(responseError.error.Errors.length>0){
            for(let i=0;i<responseError.error.Errors.length;i++){
              this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Hata");
            }
          }       
        });
    }else{
      this.toastrService.error('Form eksik', 'Hata');
    }
  }

  getProductUnitById(productUnitId:number){
    this.productUnitService.getProductUnitsById(productUnitId).subscribe((response)=>{
      this.productUnits=response.data[0];
    });
  }
}
