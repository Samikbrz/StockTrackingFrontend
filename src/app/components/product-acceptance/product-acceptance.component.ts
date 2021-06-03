import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductAcceptanceDetail } from 'src/app/models/productAcceptanceDetail';
import { ProductAcceptanceService } from 'src/app/services/product-acceptance.service';

@Component({
  selector: 'app-product-acceptance',
  templateUrl: './product-acceptance.component.html',
  styleUrls: ['./product-acceptance.component.css']
})
export class ProductAcceptanceComponent implements OnInit {

  productAcceptances:ProductAcceptanceDetail[];

  constructor(private productAcceptanceService:ProductAcceptanceService,
    private toastrService:ToastrService
    ) { }

  ngOnInit(): void {
    this.getProductAcceptances();
  }

  getProductAcceptances() {
    this.productAcceptanceService.getProductAcceptances().subscribe(response=>{
      this.productAcceptances=response.data;
      this.toastrService.success(response.message,"Başarılı");
    })
  }

}
