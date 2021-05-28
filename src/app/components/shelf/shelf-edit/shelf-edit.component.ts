import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Shelf } from 'src/app/models/shelf';
import { Store } from 'src/app/models/store';
import { ShelfService } from 'src/app/services/shelf.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-shelf-edit',
  templateUrl: './shelf-edit.component.html',
  styleUrls: ['./shelf-edit.component.css']
})
export class ShelfEditComponent implements OnInit {

  shelfEditForm:FormGroup;
  stores:Store[];
  shelf:Shelf;

  constructor(
    private formBuilder:FormBuilder,
    private shelfService:ShelfService,
    private storeService:StoreService,
    private toastrService:ToastrService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.activatedRoute.params.subscribe((params) => {
      if (params['shelfId']) {
        this.getShelfById(params['shelfId']);
      }
    });
  }

  ngOnInit(): void {
    this.createShelfEditForm();
    this.getStores();
  } 

  createShelfEditForm() {
    this.shelfEditForm = this.formBuilder.group({     
      shelfName:['',Validators.required],
      storeId:['',Validators.required],                 
    });
  }

  getStores(){
    this.storeService.getStores().subscribe(response=>{
      this.stores=response.data      
    })
  }

  updateShelf(){
    if (this.shelfEditForm.valid) {
      let shelfModel = Object.assign({}, this.shelfEditForm.value);
      shelfModel.id=this.shelf.id;
      this.shelfService.update(shelfModel).subscribe((response)=>{
        this.toastrService.success("Raf başarı ile güncellendi","Başarılı");   
        window.location.reload();     
      },(responseError)=>{        
        this.toastrService.error(responseError.error.message)
      });      
    }
  }

  getShelfById(shelfId:number){
    this.shelfService.getShelfById(shelfId).subscribe((response)=>{
      this.shelf=response.data[0];
      this.shelfEditForm.setValue({
        shelfName:this.shelf.shelfName,
        storeId:this.shelf.storeId,        
      })
    });
  }

}
