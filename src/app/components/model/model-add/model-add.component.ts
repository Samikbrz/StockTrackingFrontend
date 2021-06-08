import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';
import { ModelService } from 'src/app/services/model.service';

@Component({
  selector: 'app-model-add',
  templateUrl: './model-add.component.html',
  styleUrls: ['./model-add.component.css']
})
export class ModelAddComponent implements OnInit {

  modelAddForm:FormGroup;
  brands:Brand[];

  constructor(
    private formBuilder:FormBuilder,
    private modelService:ModelService,
    private brandService:BrandService,
    private toastrService:ToastrService

  ) { }

  ngOnInit(): void {
    this.createModelAddForm();
    this.getBrands();
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response=>{
      this.brands=response.data
    })
  }

  createModelAddForm() {
    this.modelAddForm = this.formBuilder.group({     
      modelName:['',Validators.required],
      brandId:['',Validators.required],
      modelDefination:['',Validators.required],
      originalBarcode:['',Validators.required]           
    });
  }

  addModel(){
    if (this.modelAddForm.valid) {
      let model = Object.assign({}, this.modelAddForm.value);
      this.modelService.add(model).subscribe((response)=>{
        this.toastrService.success("Model başarı ile eklendi","Başarılı");   
        window.location.reload();     
      },responseError=>{                
        if(responseError.error.Message.length>0){
          this.toastrService.error(responseError.error.Message,"Hata");
        }       
      });     
    }
  }

}
