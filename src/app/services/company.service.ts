import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../models/company';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  apiUrl = 'https://localhost:44359/api';
  constructor(private httlpClient:HttpClient) { }

  getCompanies():Observable<ListResponseModel<Company>>{
    let newPath=this.apiUrl+"/company/getall"
    return this.httlpClient.get<ListResponseModel<Company>>(newPath);
  }
}
