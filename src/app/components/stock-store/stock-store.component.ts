import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { StockStore } from 'src/app/models/stockStore';
import { StockStoreDetail } from 'src/app/models/stockStoreDetail';
import { StockStoreService } from 'src/app/services/stock-store.service';

@Component({
  selector: 'app-stock-store',
  templateUrl: './stock-store.component.html',
  styleUrls: ['./stock-store.component.css']
})
export class StockStoreComponent implements OnInit {

  stockStores:StockStoreDetail[];
  public barcode="";

  constructor(private stockStoreService:StockStoreService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getStockStores();
  }

  getStockStores() {
    this.stockStoreService.getStockStores().subscribe(response=>{
      this.stockStores=response.data;     
      this.toastrService.success(response.message,"Başarılı");
    })
  }

  deleteStockStore(stockStore:StockStore){
    if(window.confirm("Depodaki ürünü silmek istediğinizden emin misiniz?")){
      this.stockStoreService.delete(stockStore).subscribe(response=>{
        window.location.reload();
        this.toastrService.success("Silindi","Başarılı");        
      },responseError=>{                
        if(responseError.error.Message.length>0){
          this.toastrService.error(responseError.error.Message,"Hata");
        }       
      });
    } 
  }

}
