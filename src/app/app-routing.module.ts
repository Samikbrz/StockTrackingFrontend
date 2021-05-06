import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExchangeRateComponent } from './components/exchange-rate/exchange-rate.component';
import { ProductUnitComponent } from './components/product-unit/product-unit.component';

const routes: Routes = [  
  {path:"productunits",component:ProductUnitComponent},
  {path:"exchangerate",component:ExchangeRateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
