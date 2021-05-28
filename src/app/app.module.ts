import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductUnitComponent } from './components/product-unit/product-unit.component';
import { BrandComponent } from './components/brand/brand.component';
import { NaviComponent } from './components/navi/navi.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ExchangeRateComponent } from './components/exchange-rate/exchange-rate.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';

import {ToastrModule} from "ngx-toastr";
import { ProductUnitAddComponent } from './components/product-unit/product-unit-add/product-unit-add.component';
import { ProposalComponent } from './components/proposal/proposal.component';
import { ProductUnitEditComponent } from './components/product-unit/product-unit-edit/product-unit-edit.component';
import { CompanyComponent } from './components/company/company.component';
import { CompanyEditComponent } from './components/company/company-edit/company-edit.component';
import { CompanyAddComponent } from './components/company/company-add/company-add.component';
import { StoreComponent } from './components/store/store.component';
import { StoreAddComponent } from './components/store/store-add/store-add.component';
import { StoreEditComponent } from './components/store/store-edit/store-edit.component';
import { BrandEditComponent } from './components/brand/brand-edit/brand-edit.component';
import { BrandAddComponent } from './components/brand/brand-add/brand-add.component';
import { ModelComponent } from './components/model/model.component';
import { ModelAddComponent } from './components/model/model-add/model-add.component';
import { ModelEditComponent } from './components/model/model-edit/model-edit.component';
import { ShelfComponent } from './components/shelf/shelf.component';
import { ShelfAddComponent } from './components/shelf/shelf-add/shelf-add.component';
import { ShelfEditComponent } from './components/shelf/shelf-edit/shelf-edit.component';
import { DrawerComponent } from './components/drawer/drawer.component';
import { DrawerAddComponent } from './components/drawer/drawer-add/drawer-add.component';
import { DrawerEditComponent } from './components/drawer/drawer-edit/drawer-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductUnitComponent,
    BrandComponent,
    NaviComponent,    
    SidebarComponent,
    ExchangeRateComponent,
    VatAddedPipe,
    FilterPipePipe,
    ProductUnitAddComponent,
    ProposalComponent,
    ProductUnitEditComponent,
    CompanyComponent,
    CompanyEditComponent,
    CompanyAddComponent,
    StoreComponent,
    StoreAddComponent,
    StoreEditComponent,
    BrandEditComponent,
    BrandAddComponent,
    ModelComponent,
    ModelAddComponent,
    ModelEditComponent,
    ShelfComponent,
    ShelfAddComponent,
    ShelfEditComponent,
    DrawerComponent,
    DrawerAddComponent,
    DrawerEditComponent,   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
