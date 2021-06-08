import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Drawer } from 'src/app/models/drawer';
import { ProductAcceptanceDetail } from 'src/app/models/productAcceptanceDetail';
import { ProductUnit } from 'src/app/models/productUnit';
import { Shelf } from 'src/app/models/shelf';
import { StockStoreDetail } from 'src/app/models/stockStoreDetail';
import { Store } from 'src/app/models/store';
import { DrawerService } from 'src/app/services/drawer.service';
import { ProductAcceptanceService } from 'src/app/services/product-acceptance.service';
import { ProductUnitService } from 'src/app/services/product-unit.service';
import { ShelfService } from 'src/app/services/shelf.service';
import { StockStoreService } from 'src/app/services/stock-store.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-stock-store-edit',
  templateUrl: './stock-store-edit.component.html',
  styleUrls: ['./stock-store-edit.component.css']
})
export class StockStoreEditComponent implements OnInit {

  productUnits:ProductUnit[];
  productAcceptances:ProductAcceptanceDetail[];
  productAcceptance:ProductAcceptanceDetail;
  stockStore:StockStoreDetail;
  stores:Store[];
  shelves:Shelf[];
  drawers:Drawer[];  
  selectedProductId: number;

  stockStoreUpdateForm:FormGroup;    

  constructor(
    private formBuilder:FormBuilder,
    private productAcceptanceService:ProductAcceptanceService,
    private stockStoreService:StockStoreService,    
    private toastrService:ToastrService,
    private shelfService:ShelfService,
    private storeService:StoreService,
    private drawerService:DrawerService,
    private productUnitService:ProductUnitService,
    private activatedRoute: ActivatedRoute,
  ) {    
   }

  ngOnInit(): void {   
    this.createStockStoreUpdateForm();    
    this.getProductUnits();
    this.getProductAceptances();
    this.getStores();
    this.getShelves();
    this.getDrawers();
    this.activatedRoute.params.subscribe((params) => {
      if (params['stockStoreId']) {
        this.getStockStoreById(params['stockStoreId']);
      }
    });
  }  

  createStockStoreUpdateForm() {
    this.stockStoreUpdateForm = this.formBuilder.group({  
      productAcceptanceId:['',Validators.required],      
      productUnitId:['',Validators.required],
      unitPrice:['',Validators.required],
      barcode:['',Validators.required],
      storeId:['',Validators.required],
      shelfId:['',Validators.required],
      drawerId:['',Validators.required],
      count:['',Validators.required],                   
    });   
  } 

  getProductUnits(){
    this.productUnitService.getProductUnits().subscribe(response=>{
      this.productUnits=response.data;
    })
  }

  getProductAceptances(){
    this.productAcceptanceService.getProductAcceptances().subscribe(response=>{
      this.productAcceptances=response.data;
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

  updateStockStore(){
    if (this.stockStoreUpdateForm.valid) {
      let stockStoreModel = Object.assign({}, this.stockStoreUpdateForm.value);
      stockStoreModel.id=this.stockStore.id;      
      this.stockStoreService.update(stockStoreModel).subscribe((response)=>{
        this.toastrService.success(response.message,"Başarılı");   
        window.location.reload();            
      },responseError=>{                
        if(responseError.error.Message.length>0){
          this.toastrService.error(responseError.error.Message,"Hata");
        }       
      });       
    }
  }

  getStockStoreById(stockStoreId:number){    
    this.stockStoreService.getStockStoreById(stockStoreId).subscribe((response)=>{
      this.stockStore=response.data[0];      
      this.stockStoreUpdateForm.setValue({
        productAcceptanceId:this.stockStore.productAcceptanceId,
        unitPrice:this.stockStore.unitPrice,
        count:this.stockStore.count, 
        barcode:this.stockStore.barcode,        
        productUnitId:this.stockStore.productUnitId,     
        storeId:this.stockStore.storeId,
        shelfId:this.stockStore.shelfId,
        drawerId:this.stockStore.drawerId,        
      })
    });
  } 

}
