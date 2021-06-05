import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductOutput } from 'src/app/models/productOutput';
import { ProductOutputDetail } from 'src/app/models/productOutputDetail';
import { ProductOutputService } from 'src/app/services/product-output.service';

@Component({
  selector: 'app-product-output',
  templateUrl: './product-output.component.html',
  styleUrls: ['./product-output.component.css']
})
export class ProductOutputComponent implements OnInit {

  productOutputs:ProductOutputDetail[];

  constructor(private productOutputService:ProductOutputService,
    private toastrService:ToastrService
    ) { }

  ngOnInit(): void {
    this.getProductOutputs();
  }

  getProductOutputs() {
    this.productOutputService.getProductOutputs().subscribe(response=>{
      this.productOutputs=response.data
      this.toastrService.success(response.message,"Başarılı");
    })
  }

  
  deleteProductOutput(productOutput:ProductOutput){
    if(window.confirm("Emin misiniz?")){
      this.productOutputService.delete(productOutput).subscribe(response=>{
        this.toastrService.success(response.message,"Deleted")
        window.location.reload();
      })
    }   
  }

}
