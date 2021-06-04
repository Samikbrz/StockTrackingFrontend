import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { ProductAcceptance } from 'src/app/models/productAcceptance';
import { ProductAcceptanceDetail } from 'src/app/models/productAcceptanceDetail';
import { StockStore } from 'src/app/models/stockStore';
import { StockStoreDetail } from 'src/app/models/stockStoreDetail';
import { ProductAcceptanceService } from 'src/app/services/product-acceptance.service';
import { StockStoreService } from 'src/app/services/stock-store.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  count = 0;
  array: StockStore[];  
  productsOfProductAcceptance:ProductAcceptanceDetail[]=[];
  productsOfStockStore: StockStoreDetail[]=[];

  array1:string[]=[];
  array2:string[]=[];  

  constructor(
    private stockStoreService: StockStoreService,
    private productAcceptanceService: ProductAcceptanceService
  ) {}

  ngOnInit(): void {
    this.countControl();
    this.productsControlForStockStore();  
    this.productsControlForProductAcceptance();            
  }

  countControl() {
    this.stockStoreService.getStockStores().subscribe((response) => {
      this.array = response.data;
      this.array.forEach((element) => {
        this.count += element.count;
      });
    });
  }

  productsControlForStockStore() {
    this.stockStoreService.getStockStores().subscribe((response) => {
      this.productsOfStockStore = response.data;
      this.productsOfStockStore.forEach((element) => {
        this.array1.push(element.productName);        
      });
    });      
  }  

  productsControlForProductAcceptance(){
    this.productAcceptanceService.getProductAcceptances().subscribe((response2) => {
      this.productsOfProductAcceptance = response2.data;
      this.productsOfProductAcceptance.forEach((element) => {
        this.array2.push(element.productName);
      });
    }); 
  }  
 
}
