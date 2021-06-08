import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-store-add',
  templateUrl: './store-add.component.html',
  styleUrls: ['./store-add.component.css']
})
export class StoreAddComponent implements OnInit {

  storeAddForm:FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private storeService:StoreService,
    private toastrService:ToastrService

  ) { }

  ngOnInit(): void {
    this.createStoreAddForm();
  }

  createStoreAddForm() {
    this.storeAddForm = this.formBuilder.group({     
      storeName:['',Validators.required],
      isSalesStore:['',Validators.required],     
    });
  }

  addStore(){
    if (this.storeAddForm.valid) {
      let storeModel = Object.assign({}, this.storeAddForm.value);
      this.storeService.add(storeModel).subscribe((response)=>{
        this.toastrService.success("Depo başarı ile eklendi","Başarılı");   
        window.location.reload();     
      },responseError=>{                
        if(responseError.error.Message.length>0){
          this.toastrService.error(responseError.error.Message,"Hata");
        }       
      });       
    }
  }
}
