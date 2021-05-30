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
import { ModelAddComponent } from './components/model/model-add/model-add.component';
import { ModelEditComponent } from './components/model/model-edit/model-edit.component';
import { ModelComponent } from './components/model/model.component';
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

const routes: Routes = [  
  {path:"",component:ProductUnitComponent},
  {path:"productunits",component:ProductUnitComponent},
  {path:"productunits/add",component:ProductUnitAddComponent},
  {path:"productunit/update/:productUnitId",component:ProductUnitEditComponent},
  {path:"exchangerate",component:ExchangeRateComponent},
  {path:"proposals",component:ProposalComponent}, 
  {path:"proposal/add",component:ProposalAddComponent}, 
  {path:"proposal/update/:proposalId",component:ProposalEditComponent},
  {path:"brands",component:BrandComponent},
  {path:"brand/add",component:BrandAddComponent},
  {path:"brand/update/:brandId",component:BrandEditComponent},
  {path:"companies",component:CompanyComponent},
  {path:"company/add",component:CompanyAddComponent},
  {path:"company/update/:companyId",component:CompanyEditComponent},  
  {path:"stores",component:StoreComponent},
  {path:"store/add",component:StoreAddComponent},
  {path:"store/update/:storeId",component:StoreEditComponent},
  {path:"models",component:ModelComponent},
  {path:"model/add",component:ModelAddComponent},
  {path:"model/update/:modelId",component:ModelEditComponent},
  {path:"shelves",component:ShelfComponent},
  {path:"shelf/add",component:ShelfAddComponent},
  {path:"shelf/update/:shelfId",component:ShelfEditComponent},
  {path:"drawers",component:DrawerComponent},
  {path:"drawer/add",component:DrawerAddComponent},
  {path:"drawer/update/:drawerId",component:DrawerEditComponent},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
