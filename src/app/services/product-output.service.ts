import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { ProductOutput } from '../models/productOutput';
import { ProductOutputDetail } from '../models/productOutputDetail';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductOutputService {

  apiUrl = 'https://localhost:44359/api';
  constructor(private httpClient: HttpClient) { }

  getProductOutputs() : Observable<ListResponseModel<ProductOutputDetail>>{
    let newPath=this.apiUrl+'/productoutput/getdetail';
    return this.httpClient.get<ListResponseModel<ProductOutputDetail>>(newPath);     
  }

  getProductOutputById(proposalId:number):Observable<ListResponseModel<ProductOutputDetail>>{
    let newPath=this.apiUrl+"/productoutput/getbyid?id="+proposalId;
    return this.httpClient.get<ListResponseModel<ProductOutputDetail>>(newPath);
  }

  update(productOutput:ProductOutput):Observable<ResponseModel>{
    let newPath=this.apiUrl+"/productoutput/update";
    return this.httpClient.post<ResponseModel>(newPath,productOutput);
  }

  delete(productOutput:ProductOutput):Observable<ResponseModel>{
    let newPath=this.apiUrl+"/productoutput/delete";
    return this.httpClient.post<ResponseModel>(newPath,productOutput);
  }

  add(productOutput:ProductOutput):Observable<ResponseModel>{
    let newPath=this.apiUrl+"/productoutput/add";
    return this.httpClient.post<ResponseModel>(newPath,productOutput);
  }
}
