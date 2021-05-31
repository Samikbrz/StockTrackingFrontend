import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { ProductAcceptance } from '../models/productAcceptance';
import { ProductAcceptanceDetail } from '../models/productAcceptanceDetail';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductAcceptanceService {

  apiUrl = 'https://localhost:44359/api';
  constructor(private httpClient:HttpClient) { }

  getProductAcceptances():Observable<ListResponseModel<ProductAcceptanceDetail>>{
    let newPath=this.apiUrl+"/productacceptance/getdetail";
    return this.httpClient.get<ListResponseModel<ProductAcceptanceDetail>>(newPath);
  }

  getById(productAcceptanceId:number):Observable<ListResponseModel<ProductAcceptanceDetail>>{
    let newPath=this.apiUrl+"/productacceptance/getbyid?id="+productAcceptanceId;
    return this.httpClient.get<ListResponseModel<ProductAcceptanceDetail>>(newPath);
  }

  update(productAcceptance:ProductAcceptance):Observable<ResponseModel>{
    let newPath=this.apiUrl+"/productacceptance/update";
    return this.httpClient.post<ResponseModel>(newPath,productAcceptance);
  }

  delete(productAcceptance:ProductAcceptance):Observable<ResponseModel>{
    let newPath=this.apiUrl+"/productacceptance/delete";
    return this.httpClient.post<ResponseModel>(newPath,productAcceptance);
  }

  add(productAcceptance:ProductAcceptance):Observable<ResponseModel>{
    let newPath=this.apiUrl+"/productacceptance/add";
    return this.httpClient.post<ResponseModel>(newPath,productAcceptance);
  }
}
