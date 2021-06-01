import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { StoreTransfer } from '../models/storeTransfer';
import { StoreTransferDetail } from '../models/storeTransferDetail';

@Injectable({
  providedIn: 'root'
})
export class StoreTransferService {

  apiUrl = 'https://localhost:44359/api';
  constructor(private httpClient: HttpClient) { }

  getStoreTransfers() : Observable<ListResponseModel<StoreTransferDetail>>{
    let newPath=this.apiUrl+'/storetransfer/getdetail';
    return this.httpClient.get<ListResponseModel<StoreTransferDetail>>(newPath);     
  }

  getStoreTransferById(storeTransferId:number):Observable<ListResponseModel<StoreTransferDetail>>{
    let newPath=this.apiUrl+"/storetransfer/getbyid?id="+storeTransferId;
    return this.httpClient.get<ListResponseModel<StoreTransferDetail>>(newPath);
  }

  update(storeTransfer:StoreTransfer):Observable<ResponseModel>{
    let newPath=this.apiUrl+"/storetransfer/update";
    return this.httpClient.post<ResponseModel>(newPath,storeTransfer);
  }

  delete(storeTransfer:StoreTransfer):Observable<ResponseModel>{
    let newPath=this.apiUrl+"/storetransfer/delete";
    return this.httpClient.post<ResponseModel>(newPath,storeTransfer);
  }

  add(storeTransfer:StoreTransfer):Observable<ResponseModel>{
    let newPath=this.apiUrl+"/storetransfer/add";
    return this.httpClient.post<ResponseModel>(newPath,storeTransfer);
  }
}
