import { Component, OnInit } from '@angular/core';
import { StockStoreDetail } from 'src/app/models/stockStoreDetail';
import { StockStoreService } from 'src/app/services/stock-store.service';

@Component({
  selector: 'app-stock-store',
  templateUrl: './stock-store.component.html',
  styleUrls: ['./stock-store.component.css']
})
export class StockStoreComponent implements OnInit {

  stockStores:StockStoreDetail[];

  constructor(private stockStoreService:StockStoreService) { }

  ngOnInit(): void {
    this.getStockStores();
  }

  getStockStores() {
    this.stockStoreService.getStockStores().subscribe(response=>{
      this.stockStores=response.data
    })
  }

}
