import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-company-add',
  templateUrl: './company-add.component.html',
  styleUrls: ['./company-add.component.css']
})
export class CompanyAddComponent implements OnInit {

  companyAddForm:FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private companyService: CompanyService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.createCompanyAddForm();
  }

  createCompanyAddForm() {
    this.companyAddForm = this.formBuilder.group({     
      companyName:['',Validators.required],
      address:['',Validators.required],
      tel1:['',Validators.required],
      tel2:['',Validators.required],
      fax:['',Validators.required],
      taxNo:['',Validators.required],
      taxName:['',Validators.required]
    });
  }

  addCompany() {
    if (this.companyAddForm.valid) {
      let companyModel = Object.assign({}, this.companyAddForm.value);
      this.companyService.add(companyModel).subscribe((response)=>{
        this.toastrService.success("Firma başarı ile eklendi","Başarılı");   
        window.location.reload();     
      },(responseError)=>{        
        this.toastrService.error(responseError.error.message)
      });      
    }
  }
}
