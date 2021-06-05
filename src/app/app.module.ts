import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
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
import { ProposalAddComponent } from './components/proposal/proposal-add/proposal-add.component';
import { ProposalEditComponent } from './components/proposal/proposal-edit/proposal-edit.component';
import { LoginComponent } from './components/login/login.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { ProductAcceptanceComponent } from './components/product-acceptance/product-acceptance.component';
import { StoreTransferComponent } from './components/store-transfer/store-transfer.component';
import { StoreTransferAddComponent } from './components/store-transfer/store-transfer-add/store-transfer-add.component';
import { ProductOutputComponent } from './components/product-output/product-output.component';
import { StockStoreComponent } from './components/stock-store/stock-store.component';
import { ProductAcceptanceAddComponent } from './components/product-acceptance/product-acceptance-add/product-acceptance-add.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { UserComponent } from './components/user/user.component';
import { UserOperationClaimComponent } from './components/user-operation-claim/user-operation-claim.component';
import { OperationClaimComponent } from './components/operation-claim/operation-claim.component';
import { UserEditComponent } from './components/user/user-edit/user-edit.component';
import { StockStoreAddComponent } from './components/stock-store/stock-store-add/stock-store-add.component';
import { OperationClaimAddComponent } from './components/operation-claim/operation-claim-add/operation-claim-add.component';
import { OperationClaimEditComponent } from './components/operation-claim/operation-claim-edit/operation-claim-edit.component';
import { ProductAcceptanceEditComponent } from './components/product-acceptance/product-acceptance-edit/product-acceptance-edit.component';
import { StoreTransferEditComponent } from './components/store-transfer/store-transfer-edit/store-transfer-edit.component';
import { UserAddComponent } from './components/user/user-add/user-add.component';
import { UserOperationClaimAddComponent } from './components/user-operation-claim/user-operation-claim-add/user-operation-claim-add.component';
import { UserOperationClaimEditComponent } from './components/user-operation-claim/user-operation-claim-edit/user-operation-claim-edit.component';
import { ProductOutputAddComponent } from './components/product-output/product-output-add/product-output-add.component';

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
    ProposalAddComponent,
    ProposalEditComponent,
    LoginComponent,
    ProductAcceptanceComponent,
    StoreTransferComponent,
    StoreTransferAddComponent,
    ProductOutputComponent,
    StockStoreComponent,
    ProductAcceptanceAddComponent,
    HomepageComponent,
    UserComponent,
    UserOperationClaimComponent,
    OperationClaimComponent,
    UserEditComponent,
    StockStoreAddComponent,
    OperationClaimAddComponent,
    OperationClaimEditComponent,
    ProductAcceptanceEditComponent,
    StoreTransferEditComponent,
    UserAddComponent,
    UserOperationClaimAddComponent,
    UserOperationClaimEditComponent,
    ProductOutputAddComponent,   
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
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
