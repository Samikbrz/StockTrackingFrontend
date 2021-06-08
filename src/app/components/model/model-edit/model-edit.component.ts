import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Model } from 'src/app/models/model';
import { ModelDetail } from 'src/app/models/modelDetail';
import { BrandService } from 'src/app/services/brand.service';
import { ModelService } from 'src/app/services/model.service';

@Component({
  selector: 'app-model-edit',
  templateUrl: './model-edit.component.html',
  styleUrls: ['./model-edit.component.css']
})
export class ModelEditComponent implements OnInit {
  
  modelUpdateForm:FormGroup;
  brands:Brand[];  
  models:ModelDetail;

  constructor(
    private toastrService:ToastrService,
    private modelService:ModelService,
    private brandService:BrandService,
    private activatedRoute: ActivatedRoute,
    private formBuilder:FormBuilder) {
      this.activatedRoute.params.subscribe((params) => {
        if (params['modelId']) {
          this.getModelsById(params['modelId']);
        }
      });
    }

  ngOnInit(): void {
    this.createModelEditForm();
    this.getBrands();
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response=>{
      this.brands=response.data
    })
  }

  createModelEditForm(){
    this.modelUpdateForm=this.formBuilder.group({
      modelName:['',Validators.required],
      brandId:['',Validators.required],
      modelDefination:['',Validators.required],
      originalBarcode:['',Validators.required] 
    })
  }

  updateModel(){    
    if(this.modelUpdateForm.valid){
      let model = Object.assign({}, this.modelUpdateForm.value)
      model.id=this.models.id;
      this.modelService.update(model).subscribe(
        (response) => {        
          this.toastrService.success('Model güncellendi','Başarılı');          
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

  getModelsById(modelId:number){
    this.modelService.getModelById(modelId).subscribe((response)=>{
      this.models=response.data[0];
      this.modelUpdateForm.setValue({
        modelName:this.models.modelName,
        brandId:this.models.brandId,
        modelDefination:this.models.modelDefination,
        originalBarcode:this.models.originalBarcode 
      })
    });
  }

}
