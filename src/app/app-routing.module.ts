import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandAddComponent } from './components/brand/brand-add/brand-add.component';
import { BrandEditComponent } from './components/brand/brand-edit/brand-edit.component';
import { BrandComponent } from './components/brand/brand.component';
import { CompanyAddComponent } from './components/company/company-add/company-add.component';
import { CompanyEditComponent } from './components/company/company-edit/company-edit.component';
import { CompanyComponent } from './components/company/company.component';
import { DrawerAddComponent } from './components/drawer/drawer-add/drawer-add.component';
import { DrawerEditComponent } from './components/drawer/drawer-edit/drawer-edit.component';
import { DrawerComponent } from './components/drawer/drawer.component';
import { ExchangeRateComponent } from './components/exchange-rate/exchange-rate.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { ModelAddComponent } from './components/model/model-add/model-add.component';
import { ModelEditComponent } from './components/model/model-edit/model-edit.component';
import { ModelComponent } from './components/model/model.component';
import { OperationClaimAddComponent } from './components/operation-claim/operation-claim-add/operation-claim-add.component';
import { OperationClaimEditComponent } from './components/operation-claim/operation-claim-edit/operation-claim-edit.component';
import { OperationClaimComponent } from './components/operation-claim/operation-claim.component';
import { ProductAcceptanceAddComponent } from './components/product-acceptance/product-acceptance-add/product-acceptance-add.component';
import { ProductAcceptanceEditComponent } from './components/product-acceptance/product-acceptance-edit/product-acceptance-edit.component';
import { ProductAcceptanceComponent } from './components/product-acceptance/product-acceptance.component';
import { ProductOutputComponent } from './components/product-output/product-output.component';
import { ProductUnitAddComponent } from './components/product-unit/product-unit-add/product-unit-add.component';
import { ProductUnitEditComponent } from './components/product-unit/product-unit-edit/product-unit-edit.component';
import { ProductUnitComponent } from './components/product-unit/product-unit.component';
import { ProposalAddComponent } from './components/proposal/proposal-add/proposal-add.component';
import { ProposalEditComponent } from './components/proposal/proposal-edit/proposal-edit.component';
import { ProposalComponent } from './components/proposal/proposal.component';
import { ShelfAddComponent } from './components/shelf/shelf-add/shelf-add.component';
import { ShelfEditComponent } from './components/shelf/shelf-edit/shelf-edit.component';
import { ShelfComponent } from './components/shelf/shelf.component';
import { StockStoreAddComponent } from './components/stock-store/stock-store-add/stock-store-add.component';
import { StockStoreComponent } from './components/stock-store/stock-store.component';
import { StoreTransferAddComponent } from './components/store-transfer/store-transfer-add/store-transfer-add.component';
import { StoreTransferComponent } from './components/store-transfer/store-transfer.component';
import { StoreAddComponent } from './components/store/store-add/store-add.component';
import { StoreEditComponent } from './components/store/store-edit/store-edit.component';
import { StoreComponent } from './components/store/store.component';
import { UserOperationClaimComponent } from './components/user-operation-claim/user-operation-claim.component';
import { UserEditComponent } from './components/user/user-edit/user-edit.component';
import { UserComponent } from './components/user/user.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [  
  {path:"",pathMatch:"full",component:LoginComponent},
  {path:"homepage",component:HomepageComponent,canActivate:[LoginGuard]},  
  {path:"users",component:UserComponent,canActivate:[LoginGuard]},
  {path:"user/update/:id",component:UserEditComponent,canActivate:[LoginGuard]},
  {path:"useroperationclaims",component:UserOperationClaimComponent,canActivate:[LoginGuard]},
  {path:"operationclaims",component:OperationClaimComponent,canActivate:[LoginGuard]},
  {path:"operationclaim/add",component:OperationClaimAddComponent,canActivate:[LoginGuard]},
  {path:"operationclaim/update/:operationClaimId",component:OperationClaimEditComponent,canActivate:[LoginGuard]},
  {path:"productunits",component:ProductUnitComponent,canActivate:[LoginGuard]},  
  {path:"productunits/add",component:ProductUnitAddComponent,canActivate:[LoginGuard]},
  {path:"productunit/update/:productUnitId",component:ProductUnitEditComponent,canActivate:[LoginGuard]},
  {path:"productacceptances",component:ProductAcceptanceComponent,canActivate:[LoginGuard]},
  {path:"productacceptance/update/:productAcceptanceId",component:ProductAcceptanceEditComponent,canActivate:[LoginGuard]},
  {path:"productacceptance/add",component:ProductAcceptanceAddComponent,canActivate:[LoginGuard]},
  {path:"productoutputs",component:ProductOutputComponent,canActivate:[LoginGuard]},
  {path:"exchangerate",component:ExchangeRateComponent,canActivate:[LoginGuard]},
  {path:"proposals",component:ProposalComponent,canActivate:[LoginGuard]}, 
  {path:"proposal/add",component:ProposalAddComponent,canActivate:[LoginGuard]}, 
  {path:"proposal/update/:proposalId",component:ProposalEditComponent,canActivate:[LoginGuard]},
  {path:"brands",component:BrandComponent,canActivate:[LoginGuard]},
  {path:"brand/add",component:BrandAddComponent,canActivate:[LoginGuard]},
  {path:"brand/update/:brandId",component:BrandEditComponent,canActivate:[LoginGuard]},
  {path:"companies",component:CompanyComponent,canActivate:[LoginGuard]},
  {path:"company/add",component:CompanyAddComponent,canActivate:[LoginGuard]},
  {path:"company/update/:companyId",component:CompanyEditComponent,canActivate:[LoginGuard]},  
  {path:"stores",component:StoreComponent,canActivate:[LoginGuard]},
  {path:"store/add",component:StoreAddComponent,canActivate:[LoginGuard]},
  {path:"store/update/:storeId",component:StoreEditComponent,canActivate:[LoginGuard]},
  {path:"models",component:ModelComponent,canActivate:[LoginGuard]},
  {path:"model/add",component:ModelAddComponent,canActivate:[LoginGuard]},
  {path:"model/update/:modelId",component:ModelEditComponent,canActivate:[LoginGuard]},
  {path:"shelves",component:ShelfComponent,canActivate:[LoginGuard]},
  {path:"shelf/add",component:ShelfAddComponent,canActivate:[LoginGuard]},
  {path:"shelf/update/:shelfId",component:ShelfEditComponent,canActivate:[LoginGuard]},
  {path:"drawers",component:DrawerComponent,canActivate:[LoginGuard]},
  {path:"drawer/add",component:DrawerAddComponent,canActivate:[LoginGuard]},
  {path:"drawer/update/:drawerId",component:DrawerEditComponent,canActivate:[LoginGuard]},
  {path:"storetransfers",component:StoreTransferComponent,canActivate:[LoginGuard]},
  {path:"storetransfers/add",component:StoreTransferAddComponent,canActivate:[LoginGuard]},  
  {path:"stockstores",component:StockStoreComponent,canActivate:[LoginGuard]},
  {path:"stockstore/add",component:StockStoreAddComponent,canActivate:[LoginGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
