import { Component, OnInit } from '@angular/core';
import { ProductUnit } from 'src/app/models/productUnit';
import { ProductUnitService } from 'src/app/services/product-unit.service';

@Component({
  selector: 'app-product-unit',
  templateUrl: './product-unit.component.html',
  styleUrls: ['./product-unit.component.css'],
})
export class ProductUnitComponent implements OnInit {
  products: ProductUnit[] = []; 
  public filterText="";
 
  constructor(private productUnitService:ProductUnitService) {}

  ngOnInit(): void {
    this.getProductUnits();
  }

  getProductUnits() {
    this.productUnitService.getProductUnits().subscribe(response=>{
      this.products=response.data
    })
  }
}
