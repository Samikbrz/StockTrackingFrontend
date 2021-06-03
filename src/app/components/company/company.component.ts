import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Company } from 'src/app/models/company';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  companies:Company[]=[];
  constructor(private companyService:CompanyService,
    private toastrService: ToastrService
    ) { }

  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies(){
    this.companyService.getCompanies().subscribe(response=>{
      this.companies=response.data
      this.toastrService.success(response.message,"Başarılı");
    })
  }

  deleteCompany(company:Company){
    if(window.confirm("Are you sure?")){
      this.companyService.delete(company).subscribe(response=>{
        this.toastrService.success("Deleted")
        window.location.reload();
      })
    }    
  }
}
