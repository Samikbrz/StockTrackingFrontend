import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-edit',
  templateUrl: './brand-edit.component.html',
  styleUrls: ['./brand-edit.component.css'],
})
export class BrandEditComponent implements OnInit {
  brand: Brand;
  brandUpdateForm: FormGroup;

  constructor(
    private toastrService: ToastrService,
    private brandService: BrandService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.createBrandEditForm();
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandId']) {
        this.getBrandById(params['brandId']);
      }
    });
  }

  createBrandEditForm() {
    this.brandUpdateForm = this.formBuilder.group({
      brandName: ['', Validators.required],
      description_1: ['', Validators.required],
      description_2: ['', Validators.required],
    });
  }

  updateBrand(): void {
    if (this.brandUpdateForm.valid) {
      let brandModel = Object.assign({}, this.brandUpdateForm.value);
      brandModel.id = this.brand.id;
      this.brandService.update(brandModel).subscribe(
        (response) => {
          this.toastrService.success(response.message, 'Başarılı');
          window.location.reload();
        },responseError=>{                
          if(responseError.error.Message.length>0){
            this.toastrService.error(responseError.error.Message,"Hata");
          }       
        }); 
    }
  }

  getBrandById(brandId: number) {
    this.brandService.getBrandById(brandId).subscribe((response) => {
      this.brand = response.data[0];
      this.brandUpdateForm.setValue({
        brandName: this.brand.brandName,
        description_1: this.brand.description_1,
        description_2: this.brand.description_2,
      });
    });
  }
}
