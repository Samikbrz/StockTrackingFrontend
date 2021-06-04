import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { StockStoreDetail } from 'src/app/models/stockStoreDetail';
import { StockStoreService } from 'src/app/services/stock-store.service';

@Component({
  selector: 'app-stock-store',
  templateUrl: './stock-store.component.html',
  styleUrls: ['./stock-store.component.css']
})
export class StockStoreComponent implements OnInit {

  stockStores:StockStoreDetail[];
  filterText="";

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

}
