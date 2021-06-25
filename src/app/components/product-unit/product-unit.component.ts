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
  
  pageOfItems: Array<any>;
  products: ProductUnit[] = [];  
  public filterText="";
  
  constructor(private productUnitService:ProductUnitService, private toastrService:ToastrService) {}

  ngOnInit(): void {
    this.getProductUnits();          
  }

  getProductUnits() {
    this.productUnitService.getProductUnits().subscribe(response=>{
      this.products=response.data    
      this.toastrService.success(response.message,"Başarılı");  
    })
  }

  deleteProductUnit(productUnit:ProductUnit){
    if(window.confirm("Are you sure?")){
      this.productUnitService.delete(productUnit).subscribe(response=>{
        this.toastrService.success("Deleted")
        window.location.reload();
      },responseError=>{                
        if(responseError.error.Message.length>0){
          this.toastrService.error(responseError.error.Message,"Hata");
        }       
      });
    }    
  }  
}
