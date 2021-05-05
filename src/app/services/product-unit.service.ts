import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { ProductUnit } from '../models/productunit';

@Injectable({
  providedIn: 'root'
})
export class ProductUnitService {

  apiUrl = 'https://localhost:44359/api/productunits/getall';
  constructor(private httpClient: HttpClient) { }

  getProductUnits() : Observable<ListResponseModel<ProductUnit>>{
    return this.httpClient.get<ListResponseModel<ProductUnit>>(this.apiUrl);     
  }
}
