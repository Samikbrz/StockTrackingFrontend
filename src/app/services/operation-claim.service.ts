import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { OperationClaim } from '../models/operationClaim';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class OperationClaimService {

  apiUrl = 'https://localhost:44359/api';
  constructor(private httpClient:HttpClient) { }

  getOperationClaims():Observable<ListResponseModel<OperationClaim>>{
    let newPath=this.apiUrl+"/operationclaim/getalldetail";
    return this.httpClient.get<ListResponseModel<OperationClaim>>(newPath);
  }

  getOperationClaimById(modelId:number):Observable<ListResponseModel<OperationClaim>>{
    let newPath=this.apiUrl+"/operationclaim/getmodelbyid?id="+modelId;
    return this.httpClient.get<ListResponseModel<OperationClaim>>(newPath);
  }

  update(operationClaim:OperationClaim):Observable<ResponseModel>{
    let newPath=this.apiUrl+"/operationclaim/update";
    return this.httpClient.post<ResponseModel>(newPath,operationClaim);
  }

  delete(operationClaim:OperationClaim):Observable<ResponseModel>{
    let newPath=this.apiUrl+"/operationclaim/delete";
    return this.httpClient.post<ResponseModel>(newPath,operationClaim);
  }

  add(operationClaim:OperationClaim):Observable<ResponseModel>{
    let newPath=this.apiUrl+"/operationclaim/add";
    return this.httpClient.post<ResponseModel>(newPath,operationClaim);
  }
}
