import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExchangeRateComponent } from './components/exchange-rate/exchange-rate.component';
import { ProductUnitAddComponent } from './components/product-unit-add/product-unit-add.component';
import { ProductUnitComponent } from './components/product-unit/product-unit.component';

const routes: Routes = [  
  {path:"",component:ProductUnitComponent},
  {path:"productunits",component:ProductUnitComponent},
  {path:"exchangerate",component:ExchangeRateComponent},
  {path:"productunits/add",component:ProductUnitAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
