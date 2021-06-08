import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Store } from 'src/app/models/store';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-store-edit',
  templateUrl: './store-edit.component.html',
  styleUrls: ['./store-edit.component.css']
})
export class StoreEditComponent implements OnInit {

  store:Store;
  storeEditForm:FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private storeService:StoreService,
    private activatedRoute: ActivatedRoute,
    private toastrService:ToastrService
  ) { }

  ngOnInit(): void {
    this.createStoreEditForm();
    this.activatedRoute.params.subscribe((params) => {
      if (params['storeId']) {
        this.getStoreById(params['storeId']);
      }
    }); 
  }

  createStoreEditForm() {
    this.storeEditForm = this.formBuilder.group({     
      storeName:['',Validators.required],
      isSalesStore:['',Validators.required],     
    });
  }

  updateStore(){
    if(this.storeEditForm.valid){
      let storeModel = Object.assign({}, this.storeEditForm.value)      
      storeModel.id=this.store.id;        
      this.storeService.update(storeModel).subscribe( response => {        
          this.toastrService.success("Depo başarı ile güncellendi",'Başarılı');    
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

  getStoreById(storeId:number){
    this.storeService.getStoreById(storeId).subscribe((response)=>{
      this.store=response.data[0];    
      this.storeEditForm.setValue({
        storeName: this.store.storeName,
        isSalesStore: this.store.isSalesStore,        
      });  
    });
  }
}
