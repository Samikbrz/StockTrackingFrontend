import { Pipe, PipeTransform } from '@angular/core';
import { ProductUnit } from '../models/productUnit';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: ProductUnit[], filterText:string): ProductUnit[] {
    filterText = filterText?filterText.toLocaleLowerCase():""
    return filterText?value.filter((p:ProductUnit)=>p.productUnitName.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
