import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Drawer } from 'src/app/models/drawer';
import { ProductAcceptanceDetail } from 'src/app/models/productAcceptanceDetail';
import { ProductUnit } from 'src/app/models/productUnit';
import { Shelf } from 'src/app/models/shelf';
import { Store } from 'src/app/models/store';
import { DrawerService } from 'src/app/services/drawer.service';
import { ProductAcceptanceService } from 'src/app/services/product-acceptance.service';
import { ProductUnitService } from 'src/app/services/product-unit.service';
import { ShelfService } from 'src/app/services/shelf.service';
import { StockStoreService } from 'src/app/services/stock-store.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-stock-store-add',
  templateUrl: './stock-store-add.component.html',
  styleUrls: ['./stock-store-add.component.css'],
})
export class StockStoreAddComponent implements OnInit {
  productUnits: ProductUnit[];
  productAcceptances: ProductAcceptanceDetail[];
  productAcceptance: ProductAcceptanceDetail;
  stores: Store[];
  shelves: Shelf[];
  drawers: Drawer[];
  selectedProductId: number;
  selectedProductUnitId: number;
  productUnitPrice: number;
  productCount: number;
  productBarcode: string;

  stockStoreAddForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productAcceptanceService: ProductAcceptanceService,
    private stockStoreService: StockStoreService,
    private toastrService: ToastrService,
    private shelfService: ShelfService,
    private storeService: StoreService,
    private drawerService: DrawerService,
    private productUnitService: ProductUnitService
  ) {}

  ngOnInit(): void {
    this.createStockStoreAddForm();
    this.getProductUnits();
    this.getProductAceptances();
    this.getStores();
    this.getShelves();
    this.getDrawers();
  }

  createStockStoreAddForm() {
    this.stockStoreAddForm = this.formBuilder.group({
      productAcceptanceId: ['', Validators.required],
      productName: ['', Validators.required],
      productUnitId: ['', Validators.required],
      unitPrice: ['', Validators.required],
      barcode: ['', Validators.required],
      storeId: ['', Validators.required],
      shelfId: ['', Validators.required],
      drawerId: ['', Validators.required],
      count: ['', Validators.required],
    });
  }

  getProductId(val: any) {
    console.log('Test value: ' + val);
    this.getInformations(val);
  }

  getProductUnits() {
    this.productUnitService.getProductUnits().subscribe((response) => {
      this.productUnits = response.data;
    });
  }

  getProductAceptances() {
    this.productAcceptanceService
      .getProductAcceptances()
      .subscribe((response) => {
        this.productAcceptances = response.data;
      });
  }

  getStores() {
    this.storeService.getStores().subscribe((response) => {
      this.stores = response.data;
    });
  }

  getShelves() {
    this.shelfService.getShelves().subscribe((response) => {
      this.shelves = response.data;
    });
  }

  getDrawers() {
    this.drawerService.getDrawers().subscribe((response) => {
      this.drawers = response.data;
    });
  }

  addStockStore() {
    if (this.stockStoreAddForm.valid) {
      let stockStoreModel = Object.assign({}, this.stockStoreAddForm.value);
      this.stockStoreService.add(stockStoreModel).subscribe(
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

  getInformations(productAcceptanceId: number) {
    this.productAcceptanceService
      .getById(productAcceptanceId)
      .subscribe((response) => {
        this.productAcceptance = response.data[0];
        console.log(response.data[0]);
        this.productUnitPrice = this.productAcceptance.unitPrice;
        this.productCount = this.productAcceptance.count;
        this.productBarcode= this.productAcceptance.barcode;
      });
  }
}
