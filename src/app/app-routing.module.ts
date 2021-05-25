import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExchangeRateComponent } from './components/exchange-rate/exchange-rate.component';
import { ProductUnitAddComponent } from './components/product-unit/product-unit-add/product-unit-add.component';
import { ProductUnitEditComponent } from './components/product-unit/product-unit-edit/product-unit-edit.component';
import { ProductUnitComponent } from './components/product-unit/product-unit.component';
import { ProposalComponent } from './components/proposal/proposal.component';

const routes: Routes = [  
  {path:"",component:ProductUnitComponent},
  {path:"productunits",component:ProductUnitComponent},
  {path:"exchangerate",component:ExchangeRateComponent},
  {path:"proposals",component:ProposalComponent},
  {path:"productunits/add",component:ProductUnitAddComponent},
  {path:"productunit/update/:productUnitId",component:ProductUnitEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
