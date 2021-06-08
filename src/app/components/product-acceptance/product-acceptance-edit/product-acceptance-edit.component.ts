import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Company } from 'src/app/models/company';
import { ProductAcceptance } from 'src/app/models/productAcceptance';
import { User } from 'src/app/models/user';
import { CompanyService } from 'src/app/services/company.service';
import { ProductAcceptanceService } from 'src/app/services/product-acceptance.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-product-acceptance-edit',
  templateUrl: './product-acceptance-edit.component.html',
  styleUrls: ['./product-acceptance-edit.component.css'],
})
export class ProductAcceptanceEditComponent implements OnInit {
  productAcceptanceUpdateForm: FormGroup;
  companies: Company[];
  users: User[];
  productAcceptance: ProductAcceptance;

  constructor(
    private formBuilder: FormBuilder,
    private productAcceptanceService: ProductAcceptanceService,
    private activatedRoute: ActivatedRoute,
    private companyService: CompanyService,
    private userService: UserService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createProductAcceptanceUpdateForm();
    this.getCompanies();
    this.getUsers();
    this.activatedRoute.params.subscribe((params) => {
      if (params['productAcceptanceId']) {
        this.getProductAcceptanceById(params['productAcceptanceId']);
      }
    });
  }

  getCompanies() {
    this.companyService.getCompanies().subscribe((response) => {
      this.companies = response.data;
    });
  }

  getUsers() {
    this.userService.getUsers().subscribe((response) => {
      this.users = response.data;
    });
  }

  createProductAcceptanceUpdateForm() {
    this.productAcceptanceUpdateForm = this.formBuilder.group({
      productRegistrationNumber: ['', Validators.required],
      productName: ['', Validators.required],
      count: ['', Validators.required],
      unitPrice: ['', Validators.required],
      totalPrice: ['', Validators.required],
      acceptanceDate: ['', Validators.required],
      userId: ['', Validators.required],
      companyId: ['', Validators.required],
      barcode: ['', Validators.required],
    });
  }

  updateProductAcceptance(): void {
    if (this.productAcceptanceUpdateForm.valid) {
      let productAcceptanceModel = Object.assign(
        {},
        this.productAcceptanceUpdateForm.value
      );
      console.log(productAcceptanceModel);
      productAcceptanceModel.id = this.productAcceptance.id;
      this.productAcceptanceService.update(productAcceptanceModel).subscribe(
        (response) => {
          this.toastrService.success(response.message, 'Başarılı');
          window.location.reload();
        },responseError=>{                
          if(responseError.error.Message.length>0){
            this.toastrService.error(responseError.error.Message,"Hata");
          }       
        }); 
    }
  }

  getProductAcceptanceById(productAcceptanceId: number) {
    this.productAcceptanceService
      .getById(productAcceptanceId)
      .subscribe((response) => {
        this.productAcceptance = response.data[0];
        this.productAcceptanceUpdateForm.setValue({
          productRegistrationNumber:this.productAcceptance.productRegistrationNumber,
          productName: this.productAcceptance.productName,
          count: this.productAcceptance.count,
          unitPrice: this.productAcceptance.unitPrice,
          totalPrice: this.productAcceptance.totalPrice,
          acceptanceDate: this.productAcceptance.acceptanceDate,
          userId: this.productAcceptance.userId,
          companyId: this.productAcceptance.companyId,
          barcode: this.productAcceptance.barcode,
        });
      });
  }
}
