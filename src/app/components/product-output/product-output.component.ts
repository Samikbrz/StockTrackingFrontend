import { Component, OnInit } from '@angular/core';
import { ProductOutputDetail } from 'src/app/models/productOutputDetail';
import { ProductOutputService } from 'src/app/services/product-output.service';

@Component({
  selector: 'app-product-output',
  templateUrl: './product-output.component.html',
  styleUrls: ['./product-output.component.css']
})
export class ProductOutputComponent implements OnInit {

  productOutputs:ProductOutputDetail[];

  constructor(private productOutputService:ProductOutputService) { }

  ngOnInit(): void {
    this.getProductOutputs();
  }

  getProductOutputs() {
    this.productOutputService.getProductOutputs().subscribe(response=>{
      this.productOutputs=response.data
    })
  }

}
