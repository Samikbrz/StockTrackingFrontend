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

  getProductUnitsById(productUnitId:number):Observable<ListResponseModel<ProductUnit>>{
    let newPath=this.apiUrl+'/productunits/getproductunitbyid?id='+productUnitId;
    return this.httpClient.get<ListResponseModel<ProductUnit>>(newPath);
  }

  add(productUnit:ProductUnit):Observable<ResponseModel>{
    let newPath=this.apiUrl+'/productunits/add';
    return this.httpClient.post<ResponseModel>(newPath,productUnit);
  }

  delete(productUnit:ProductUnit):Observable<ResponseModel>{
    let newPath=this.apiUrl+'/productunits/delete';
    return this.httpClient.post<ResponseModel>(newPath,productUnit);
  }

  update(productUnit:ProductUnit):Observable<ResponseModel>{
    let newPath=this.apiUrl+'/productunits/update';
    return this.httpClient.post<ResponseModel>(newPath,productUnit);
  }

}
