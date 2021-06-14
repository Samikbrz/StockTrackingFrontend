import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Store } from 'src/app/models/store';
import { ShelfService } from 'src/app/services/shelf.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-shelf-add',
  templateUrl: './shelf-add.component.html',
  styleUrls: ['./shelf-add.component.css']
})
export class ShelfAddComponent implements OnInit {

  shelfAddForm:FormGroup;
  stores:Store[];

  constructor(
    private formBuilder:FormBuilder,
    private shelfService:ShelfService,
    private storeService:StoreService,
    private toastrService:ToastrService
  ) { }

  ngOnInit(): void {
    this.createShelfAddForm();
    this.getStores();
  }

  getStores(){
    this.storeService.getStores().subscribe(response=>{
      this.stores=response.data
    })
  }

  createShelfAddForm() {
    this.shelfAddForm = this.formBuilder.group({     
      shelfName:['',Validators.required],
      storeId:['',Validators.required],                 
    });
  }

  addShelf(){
    if (this.shelfAddForm.valid) {
      let shelfModel = Object.assign({}, this.shelfAddForm.value);      
      this.shelfService.add(shelfModel).subscribe((response)=>{
        this.toastrService.success("Raf başarı ile eklendi","Başarılı");   
        window.location.reload();     
      },responseError=>{                
        if(responseError.error.Message.length>0){
          this.toastrService.error(responseError.error.Message,"Hata");
        }       
      });       
    }
  }

}
