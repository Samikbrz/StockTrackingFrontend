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
import { LoginComponent } from './components/login/login.component';
import { ModelAddComponent } from './components/model/model-add/model-add.component';
import { ModelEditComponent } from './components/model/model-edit/model-edit.component';
import { ModelComponent } from './components/model/model.component';
import { ProductAcceptanceComponent } from './components/product-acceptance/product-acceptance.component';
import { ProductUnitAddComponent } from './components/product-unit/product-unit-add/product-unit-add.component';
import { ProductUnitEditComponent } from './components/product-unit/product-unit-edit/product-unit-edit.component';
import { ProductUnitComponent } from './components/product-unit/product-unit.component';
import { ProposalAddComponent } from './components/proposal/proposal-add/proposal-add.component';
import { ProposalEditComponent } from './components/proposal/proposal-edit/proposal-edit.component';
import { ProposalComponent } from './components/proposal/proposal.component';
import { ShelfAddComponent } from './components/shelf/shelf-add/shelf-add.component';
import { ShelfEditComponent } from './components/shelf/shelf-edit/shelf-edit.component';
import { ShelfComponent } from './components/shelf/shelf.component';
import { StoreAddComponent } from './components/store/store-add/store-add.component';
import { StoreEditComponent } from './components/store/store-edit/store-edit.component';
import { StoreComponent } from './components/store/store.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [  
  {path:"",pathMatch:"full",component:LoginComponent},
  {path:"productunits",component:ProductUnitComponent,canActivate:[LoginGuard]},  
  {path:"productunits/add",component:ProductUnitAddComponent,canActivate:[LoginGuard]},
  {path:"productunit/update/:productUnitId",component:ProductUnitEditComponent,canActivate:[LoginGuard]},
  {path:"productacceptances",component:ProductAcceptanceComponent,canActivate:[LoginGuard]},
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
