import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Company } from 'src/app/models/company';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.css'],
})
export class CompanyEditComponent implements OnInit {
  company: Company;
  companyUpdateForm: FormGroup;

  constructor(
    private toastrService: ToastrService,
    private companyService: CompanyService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.createCompanyEditForm();
    this.activatedRoute.params.subscribe((params) => {
      if (params['companyId']) {
        this.getCompanyById(params['companyId']);
      }
    });
  }

  createCompanyEditForm() {
    this.companyUpdateForm = this.formBuilder.group({
      companyName: ['', Validators.required],
      address: ['', Validators.required],
      tel1: ['', Validators.required],
      tel2: ['', Validators.required],
      fax: ['', Validators.required],
      taxNo: ['', Validators.required],
      taxName: ['', Validators.required],
    });
  }

  updateCompany(): void {
    if (this.companyUpdateForm.valid) {
      let companyModel = Object.assign({}, this.companyUpdateForm.value);
      companyModel.id = this.company.id;
      this.companyService.update(companyModel).subscribe(
        (response) => {
          this.toastrService.success(response.message, 'Başarılı');
          window.location.reload();
        },
        (responseError) => {
          if (responseError.error.Errors.length > 0) {
            for (let i = 0; i < responseError.error.Errors.length; i++) {
              this.toastrService.error(
                responseError.error.Errors[i].ErrorMessage,
                'Hata'
              );
            }
          }
        }
      );
    }
  }

  getCompanyById(companyId: number) {
    this.companyService.getCompanyById(companyId).subscribe((response) => {
      this.company = response.data[0];
      this.companyUpdateForm.setValue({
        companyName: this.company.companyName,
        address: this.company.address,
        tel1: this.company.tel1,
        tel2: this.company.tel2,
        fax: this.company.fax,
        taxNo: this.company.taxNo,
        taxName: this.company.taxName,
      });
    });
  }
}
