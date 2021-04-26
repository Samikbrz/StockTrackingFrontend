import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductUnit } from 'src/app/models/productunit';
import { ProductUnitResponseModel } from 'src/app/models/productUnitResponseModel';

@Component({
  selector: 'app-product-unit',
  templateUrl: './product-unit.component.html',
  styleUrls: ['./product-unit.component.css'],
})
export class ProductUnitComponent implements OnInit {
  products: ProductUnit[] = [];
  apiUrl = 'https://localhost:44359/api/productunits/getall';
 
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getProductUnits();
  }

  getProductUnits() {
    this.httpClient
      .get<ProductUnitResponseModel>(this.apiUrl)
      .subscribe((response) => {
        this.products=response.data
      });
  }
}
