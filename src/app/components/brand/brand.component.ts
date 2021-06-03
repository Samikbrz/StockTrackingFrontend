import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands:Brand[]=[];
  constructor(
    private brandService:BrandService,
    private toastrService:ToastrService
    ) { }

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response=>{
      this.brands=response.data;
      this.toastrService.success(response.message,"Başarılı");
    })    
  }

  deleteBrand(brand:Brand){
    if(window.confirm("Markayı silmek istediğinizden emin misiniz?")){
      this.brandService.delete(brand).subscribe(response=>{
        this.toastrService.success("Deleted")
        window.location.reload();
      })
    }  
  }

}
