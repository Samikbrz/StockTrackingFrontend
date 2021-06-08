import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Company } from 'src/app/models/company';
import { ProductAcceptance } from 'src/app/models/productAcceptance';
import { ProductAcceptanceDetail } from 'src/app/models/productAcceptanceDetail';
import { StockStoreDetail } from 'src/app/models/stockStoreDetail';
import { User } from 'src/app/models/user';
import { CompanyService } from 'src/app/services/company.service';
import { ProductAcceptanceService } from 'src/app/services/product-acceptance.service';
import { ProductOutputService } from 'src/app/services/product-output.service';
import { StockStoreService } from 'src/app/services/stock-store.service';
import { UserService } from 'src/app/services/user.service';
import { StockStoreComponent } from '../../stock-store/stock-store.component';

@Component({
  selector: 'app-product-output-add',
  templateUrl: './product-output-add.component.html',
  styleUrls: ['./product-output-add.component.css'],
})
export class ProductOutputAddComponent implements OnInit {
  productOutputAddForm: FormGroup;
  companies: Company[];
  users: User[];
  productAcceptances: ProductAcceptanceDetail[];
  productAcceptance: ProductAcceptanceDetail;
  stockStores: StockStoreDetail[];
  stockStore: StockStoreDetail;

  productCount: number;
  productBarcode: string;

  constructor(
    private formBuilder: FormBuilder,
    private stockStoreService: StockStoreService,
    private productOutputService: ProductOutputService,    
    private companyService: CompanyService,
    private userService: UserService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createProductOutputAddForm();
    this.getCompanies();
    this.getUsers();
    this.getProducts();
  }

  getProductId(val: any) {    
    if (val !== 'undefined') {
      this.getInformations(val);
    }
  }

  getProducts() {
    this.stockStoreService.getStockStores().subscribe((response) => {
      this.stockStores = response.data;
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

  createProductOutputAddForm() {
    this.productOutputAddForm = this.formBuilder.group({
      exitNumber: ['', Validators.required],
      productAcceptanceId: ['', Validators.required],
      count: ['', Validators.required],
      unitPrice: ['', Validators.required],
      totalPrice: ['', Validators.required],
      date: ['', Validators.required],
      userId: ['', Validators.required],
      companyId: ['', Validators.required],
      barcode: ['', Validators.required],
    });
  }

  addProductOutput() {
    console.log(this.productOutputAddForm.value)
    if (this.productOutputAddForm.valid) {
      let productOutputModel = Object.assign(
        {},
        this.productOutputAddForm.value
      );
      console.log(productOutputModel)
      this.productOutputService.add(productOutputModel).subscribe(
        (response) => {
          this.toastrService.success(response.message, 'Başarılı');
          window.location.reload();
        },responseError=>{                
          if(responseError.error.Message.length>0){
            this.toastrService.error(responseError.error.Message,"Hata");
          }       
        }); 
    }else{
      this.toastrService.error("Form Eksik!", 'Uyarı!');
    }
  }

  getInformations(productAcceptanceId: number) {
    this.stockStoreService
      .getByProductAcceptanceId(productAcceptanceId)
      .subscribe((response) => {
        this.stockStore = response.data[0];              
        this.productCount = this.stockStore.count;
        this.productBarcode = this.stockStore.barcode;
      });
  }
}
