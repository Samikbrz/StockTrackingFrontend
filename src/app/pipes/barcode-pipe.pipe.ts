import { Pipe, PipeTransform } from '@angular/core';
import { StockStoreDetail } from '../models/stockStoreDetail';

@Pipe({
  name: 'barcodePipe'
})
export class BarcodePipePipe implements PipeTransform {

  transform(value: StockStoreDetail[], barcode:string): StockStoreDetail[] {
    barcode = barcode?barcode.toLocaleLowerCase():""
    return barcode?value.filter((p:StockStoreDetail)=>p.barcode.toLocaleLowerCase().indexOf(barcode)!==-1):value;  
  }
}
