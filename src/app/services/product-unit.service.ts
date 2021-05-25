import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { ProductUnit } from '../models/productUnit';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductUnitService {

  apiUrl = 'https://localhost:44359/api';
  constructor(private httpClient: HttpClient) { }

  getProductUnits() : Observable<ListResponseModel<ProductUnit>>{
    let newPath=this.apiUrl+'/productunits/getall';
    return this.httpClient.get<ListResponseModel<ProductUnit>>(newPath);     
  }

  add(productUnit:ProductUnit):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+'/productunits/add',productUnit);
  }

  delete(productUnit:ProductUnit):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"/productunits/delete",productUnit);
  }

  update(productUnit:ProductUnit):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"/productunits/update",productUnit);
  }
}
