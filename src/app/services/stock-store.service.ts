import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { StockStore } from '../models/stockStore';
import { StockStoreDetail } from '../models/stockStoreDetail';

@Injectable({
  providedIn: 'root'
})
export class StockStoreService {

  apiUrl = 'https://localhost:44359/api';
  constructor(private httpClient: HttpClient) { }

  getStockStores() : Observable<ListResponseModel<StockStoreDetail>>{
    let newPath=this.apiUrl+'/stockstore/getdetail';
    return this.httpClient.get<ListResponseModel<StockStoreDetail>>(newPath);     
  }

  getStockStoreById(stockStoreId:number):Observable<ListResponseModel<StockStoreDetail>>{    
    let newPath=this.apiUrl+"/stockstore/getbyid?id="+stockStoreId;
    return this.httpClient.get<ListResponseModel<StockStoreDetail>>(newPath);
  }

  getByProductAcceptanceId(productAcceptanceId:number):Observable<ListResponseModel<StockStoreDetail>>{    
    let newPath=this.apiUrl+"/stockstore/getbyproductacceptanceid?id="+productAcceptanceId;
    return this.httpClient.get<ListResponseModel<StockStoreDetail>>(newPath);
  }

  update(stockStore:StockStore):Observable<ResponseModel>{
    let newPath=this.apiUrl+"/stockstore/update";
    return this.httpClient.post<ResponseModel>(newPath,stockStore);
  }

  delete(stockStore:StockStore):Observable<ResponseModel>{
    let newPath=this.apiUrl+"/stockstore/delete";
    return this.httpClient.post<ResponseModel>(newPath,stockStore);
  }

  add(stockStore:StockStore):Observable<ResponseModel>{
    let newPath=this.apiUrl+"/stockstore/add";
    return this.httpClient.post<ResponseModel>(newPath,stockStore);
  }
}
