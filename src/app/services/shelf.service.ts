import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { Shelf } from '../models/shelf';
import { ShelfDetail } from '../models/shelfDetail';

@Injectable({
  providedIn: 'root'
})
export class ShelfService {

  apiUrl = 'https://localhost:44359/api';
  constructor(private httpClient:HttpClient) { }

  getShelves():Observable<ListResponseModel<ShelfDetail>>{
    let newPath=this.apiUrl+"/shelf/getdetail";
    return this.httpClient.get<ListResponseModel<ShelfDetail>>(newPath);
  }

  getShelfById(shelfId:number):Observable<ListResponseModel<ShelfDetail>>{
    let newPath=this.apiUrl+"/shelf/getmodelbyid?id="+shelfId;
    return this.httpClient.get<ListResponseModel<ShelfDetail>>(newPath);
  }

  update(shelf:Shelf):Observable<ResponseModel>{
    let newPath=this.apiUrl+"/shelf/update";
    return this.httpClient.post<ResponseModel>(newPath,shelf);
  }

  delete(shelf:Shelf):Observable<ResponseModel>{
    let newPath=this.apiUrl+"/shelf/delete";
    return this.httpClient.post<ResponseModel>(newPath,shelf);
  }

  add(shelf:Shelf):Observable<ResponseModel>{
    let newPath=this.apiUrl+"/shelf/add";
    return this.httpClient.post<ResponseModel>(newPath,shelf);
  }
}
