import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { ProposalDetail } from '../models/proposalDetail';
import { Proposal } from '../models/proposal';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ProposalService {  

  apiUrl = 'https://localhost:44359/api';
  constructor(private httpClient: HttpClient) { }

  getProposals() : Observable<ListResponseModel<ProposalDetail>>{
    let newPath=this.apiUrl+'/proposal/getdetail';
    return this.httpClient.get<ListResponseModel<ProposalDetail>>(newPath);     
  }

  getProposalById(proposalId:number):Observable<ListResponseModel<ProposalDetail>>{
    let newPath=this.apiUrl+"/proposal/getbyid?id="+proposalId;
    return this.httpClient.get<ListResponseModel<ProposalDetail>>(newPath);
  }

  update(proposal:Proposal):Observable<ResponseModel>{
    let newPath=this.apiUrl+"/proposal/update";
    return this.httpClient.post<ResponseModel>(newPath,proposal);
  }

  delete(proposal:Proposal):Observable<ResponseModel>{
    let newPath=this.apiUrl+"/proposal/delete";
    return this.httpClient.post<ResponseModel>(newPath,proposal);
  }

  add(proposal:Proposal):Observable<ResponseModel>{
    let newPath=this.apiUrl+"/proposal/add";
    return this.httpClient.post<ResponseModel>(newPath,proposal);
  }
}
