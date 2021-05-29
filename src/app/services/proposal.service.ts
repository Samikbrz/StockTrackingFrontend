import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { ProposalDetail } from '../models/proposalDetail';

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
}
