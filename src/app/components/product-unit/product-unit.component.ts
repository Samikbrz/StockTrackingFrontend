import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-unit',
  templateUrl: './product-unit.component.html',
  styleUrls: ['./product-unit.component.css']
})
export class ProductUnitComponent implements OnInit {

  product: any = { productUnitId: 1, productUnitName: "Bardak" }
  product2: any = { productUnitId: 2, productUnitName: "Bardak2" }

  products = [this.product, this.product2];
  constructor() { }

  ngOnInit(): void {
  }

}
