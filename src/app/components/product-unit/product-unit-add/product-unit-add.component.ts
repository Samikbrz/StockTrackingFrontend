import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ProductUnitService } from 'src/app/services/product-unit.service';

@Component({
  selector: 'app-product-unit-add',
  templateUrl: './product-unit-add.component.html',
  styleUrls: ['./product-unit-add.component.css'],
})
export class ProductUnitAddComponent implements OnInit {

  productUnitAddForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private productUnitService: ProductUnitService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createProductUnitAddForm();
  }

  createProductUnitAddForm() {
    this.productUnitAddForm = this.formBuilder.group({
      productUnitName: ['', Validators.required],
    });
  }

  add() {
    if (this.productUnitAddForm.valid) {
      let productModel = Object.assign({}, this.productUnitAddForm.value);
      this.productUnitService.add(productModel).subscribe((response)=>{
        this.toastrService.success(response.message,"Başarılı");  
        window.location.reload();      
      },responseError=>{  
        if(responseError.error.Errors.length>0){
          for(let i=0;i<responseError.error.Errors.length;i++){
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Hata");
          }
        }       
      });      
    }
  }
}
