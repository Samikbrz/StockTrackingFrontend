import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { Store } from '../models/store';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  apiUrl = 'https://localhost:44359/api';
  constructor(private httpClient:HttpClient) { }

  getStores():Observable<ListResponseModel<Store>>{
    let newPath=this.apiUrl+"/store/getall";
    return this.httpClient.get<ListResponseModel<Store>>(newPath);
  }

  getStoreById(storeId:number):Observable<ListResponseModel<Store>>{
    let newPath=this.apiUrl+'/store/getstorebyid?id='+storeId;
    return this.httpClient.get<ListResponseModel<Store>>(newPath);
  }

  add(store:Store):Observable<ResponseModel>{
    let newPath=this.apiUrl+"/store/add";
    return this.httpClient.post<ResponseModel>(newPath,store);
  }

  update(store:Store):Observable<ResponseModel>{
    let newPath=this.apiUrl+"/store/update";
    return this.httpClient.post<ResponseModel>(newPath,store);
  }

  delete(store:Store):Observable<ResponseModel>{
    let newPath=this.apiUrl+"/store/delete";
    return this.httpClient.post<ResponseModel>(newPath,store)
  }

}
