import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { UserOperationClaim } from '../models/userOperationClaim';
import { UserOperationClaimDetail } from '../models/userOperationClaimDetail';

@Injectable({
  providedIn: 'root'
})
export class UserOperationClaimService {

  apiUrl = 'https://localhost:44359/api';
  constructor(private httpClient:HttpClient) { }

  getUserOperationClaims():Observable<ListResponseModel<UserOperationClaimDetail>>{
    let newPath=this.apiUrl+"/useroperationclaim/getdetail";
    return this.httpClient.get<ListResponseModel<UserOperationClaimDetail>>(newPath);
  }

  getUserOperationClaimById(userOperationClaimId:number):Observable<ListResponseModel<UserOperationClaimDetail>>{
    let newPath=this.apiUrl+'/useroperationclaim/getbyid?id='+userOperationClaimId;
    return this.httpClient.get<ListResponseModel<UserOperationClaimDetail>>(newPath);
  }

  add(userOperationClaim:UserOperationClaim):Observable<ResponseModel>{
    let newPath=this.apiUrl+"/useroperationclaim/add";
    return this.httpClient.post<ResponseModel>(newPath,userOperationClaim);
  }

  update(userOperationClaim:UserOperationClaim):Observable<ResponseModel>{
    let newPath=this.apiUrl+"/useroperationclaim/update";    
    return this.httpClient.post<ResponseModel>(newPath,userOperationClaim);
  }

  delete(userOperationClaim:UserOperationClaim):Observable<ResponseModel>{
    let newPath=this.apiUrl+"/useroperationclaim/delete";
    return this.httpClient.post<ResponseModel>(newPath,userOperationClaim)
  }
}
