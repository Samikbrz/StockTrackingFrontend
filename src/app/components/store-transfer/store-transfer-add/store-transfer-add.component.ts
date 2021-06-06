import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Drawer } from 'src/app/models/drawer';
import { Shelf } from 'src/app/models/shelf';
import { Store } from 'src/app/models/store';
import { User } from 'src/app/models/user';
import { DrawerService } from 'src/app/services/drawer.service';
import { ShelfService } from 'src/app/services/shelf.service';
import { StoreTransferService } from 'src/app/services/store-transfer.service';
import { StoreService } from 'src/app/services/store.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-store-transfer-add',
  templateUrl: './store-transfer-add.component.html',
  styleUrls: ['./store-transfer-add.component.css']
})
export class StoreTransferAddComponent implements OnInit {

  stores:Store[];
  shelves:Shelf[];
  drawers:Drawer[];  
  users:User[];
  selectedProductId: number;

  storeTransferAddForm:FormGroup;    

  constructor(
    private formBuilder:FormBuilder,        
    private toastrService:ToastrService,
    private shelfService:ShelfService,
    private storeService:StoreService,
    private drawerService:DrawerService,  
    private storeTransferService:StoreTransferService,
    private userService:UserService  
  ) { }

  ngOnInit(): void {   
    this.createStoreTransferAddForm();    
    this.getStores();
    this.getShelves();
    this.getDrawers();
    this.getUsers();
  }  

  createStoreTransferAddForm() {
    this.storeTransferAddForm = this.formBuilder.group({  
      transferNo:['',Validators.required],
      date:['',Validators.required],
      sourceStoreId:['',Validators.required],
      sourceShelfId:['',Validators.required],
      sourceDrawerId:['',Validators.required],
      targetStoreId:['',Validators.required],
      targetShelfId:['',Validators.required],
      targetDrawerId:['',Validators.required],
      userId:['',Validators.required]             
    });   
  }

  getUsers(){
    this.userService.getUsers().subscribe(response=>{
      this.users=response.data
    })
  }

  getStores(){
    this.storeService.getStores().subscribe(response=>{
      this.stores=response.data
    })
  }

  getShelves(){
    this.shelfService.getShelves().subscribe(response=>{
      this.shelves=response.data
    })
  }

  getDrawers(){
    this.drawerService.getDrawers().subscribe(response=>{
      this.drawers=response.data
    })
  }

  addStoreTransfer(){
    if (this.storeTransferAddForm.valid) {
      let storeTransferModel = Object.assign({}, this.storeTransferAddForm.value);      
      this.storeTransferService.add(storeTransferModel).subscribe((response)=>{
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
