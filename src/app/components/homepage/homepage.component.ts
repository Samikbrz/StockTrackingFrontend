import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { StockStore } from 'src/app/models/stockStore';
import { StockStoreService } from 'src/app/services/stock-store.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  count=0;
  arrays:StockStore[];
  constructor(private stockStoreService:StockStoreService) { }

  ngOnInit(): void {
    this.countControl();
  }

  countControl(){
    this.stockStoreService.getStockStores().subscribe(response=>{
      this.arrays=response.data;
      this.arrays.forEach((element)=>{
        this.count+= element.count;
      })       
    })       
  }
}
