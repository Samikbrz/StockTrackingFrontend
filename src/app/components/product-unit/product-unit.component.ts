import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductUnit } from 'src/app/models/productUnit';
import { ProductUnitService } from 'src/app/services/product-unit.service';

@Component({
  selector: 'app-product-unit',
  templateUrl: './product-unit.component.html',
  styleUrls: ['./product-unit.component.css'],
})
export class ProductUnitComponent implements OnInit {
  items: any = [];
  pageOfItems: Array<any>;
  products: ProductUnit[] = []; 
  selectedProductUnit:ProductUnit=null;
  public filterText="";
  
  constructor(private productUnitService:ProductUnitService, private toastrService:ToastrService) {}

  ngOnInit(): void {
    this.getProductUnits(); 
    this.items = Array(150).fill(0).map((x, i) => ({ id: (i + 1), name: `Item ${i + 1}`}));      
  }

  getProductUnits() {
    this.productUnitService.getProductUnits().subscribe(response=>{
      this.products=response.data      
    })
  }

  deleteProductUnit(productUnit:ProductUnit){
    if(window.confirm("Are you sure?")){
      this.productUnitService.delete(productUnit).subscribe(response=>{
        this.toastrService.success("Deleted")
        window.location.reload();
      })
    }    
  }

  setCurrentProduct(productUnit:ProductUnit){
    this.selectedProductUnit=productUnit;
  }

  onChangePage(pageOfItems: Array<any>) {   
    this.pageOfItems = pageOfItems;
}
  
}
