import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Drawer } from 'src/app/models/drawer';
import { Shelf } from 'src/app/models/shelf';
import { Store } from 'src/app/models/store';
import { StoreTransfer } from 'src/app/models/storeTransfer';
import { User } from 'src/app/models/user';
import { DrawerService } from 'src/app/services/drawer.service';
import { ShelfService } from 'src/app/services/shelf.service';
import { StoreTransferService } from 'src/app/services/store-transfer.service';
import { StoreService } from 'src/app/services/store.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-store-transfer-edit',
  templateUrl: './store-transfer-edit.component.html',
  styleUrls: ['./store-transfer-edit.component.css']
})
export class StoreTransferEditComponent implements OnInit {

  stores:Store[];
  shelves:Shelf[];
  drawers:Drawer[];  
  users:User[];  
  storeTransfer:StoreTransfer;

  storeTransferEditForm:FormGroup;    

  constructor(
    private formBuilder:FormBuilder,        
    private toastrService:ToastrService,
    private shelfService:ShelfService,
    private storeService:StoreService,
    private drawerService:DrawerService,  
    private storeTransferService:StoreTransferService,
    private userService:UserService,
    private activatedRoute: ActivatedRoute,  
  ) { }

  ngOnInit(): void {   
    this.createStoreTransferAddForm();    
    this.getStores();
    this.getShelves();
    this.getDrawers();
    this.getUsers();
    this.activatedRoute.params.subscribe((params) => {
      if (params['storeTransferId']) {
        this.getStoreTransferById(params['storeTransferId']);
      }
    }); 
  }  

  createStoreTransferAddForm() {
    this.storeTransferEditForm = this.formBuilder.group({  
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

  updateStoreTransfer(){
    if (this.storeTransferEditForm.valid) {
      let storeTransferModel = Object.assign({}, this.storeTransferEditForm.value); 
      storeTransferModel.id=this.storeTransfer.id     
      this.storeTransferService.update(storeTransferModel).subscribe((response)=>{
        this.toastrService.success(response.message,"Başarılı");   
        window.location.reload();            
      },responseError=>{                
        if(responseError.error.Message.length>0){
          this.toastrService.error(responseError.error.Message,"Hata");
        }       
      });         
    }
  }

  getStoreTransferById(storeTransferId:number){
    this.storeTransferService.getStoreTransferById(storeTransferId).subscribe(response=>{
      this.storeTransfer=response.data[0];
      this.storeTransferEditForm.setValue({
        transferNo: this.storeTransfer.transferNo,
        date: this.storeTransfer.date,        
        sourceStoreId: this.storeTransfer.sourceStoreId,
        sourceShelfId: this.storeTransfer.sourceShelfId,
        sourceDrawerId: this.storeTransfer.sourceDrawerId,
        targetStoreId: this.storeTransfer.targetStoreId,
        targetShelfId: this.storeTransfer.targetShelfId,
        targetDrawerId: this.storeTransfer.targetDrawerId,
        userId: this.storeTransfer.userId,   
      });
    })
  }

}
