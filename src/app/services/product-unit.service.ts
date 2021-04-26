import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductUnitResponseModel } from '../models/productUnitResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductUnitService {

  apiUrl = 'https://localhost:44359/api/productunits/getall';
  constructor(private httpClient: HttpClient) { }

  getProductUnits() : Observable<ProductUnitResponseModel>{
    return this.httpClient.get<ProductUnitResponseModel>(this.apiUrl);     
  }
}
