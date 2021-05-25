import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Proposal } from '../models/proposal';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ProposalService {  

  apiUrl = 'https://localhost:44359/api';
  constructor(private httpClient: HttpClient) { }

  getProposals() : Observable<ListResponseModel<Proposal>>{
    let newPath=this.apiUrl+'/proposal/getall';
    return this.httpClient.get<ListResponseModel<Proposal>>(newPath);     
  }
}
