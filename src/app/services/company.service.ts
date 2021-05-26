import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../models/company';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  apiUrl = 'https://localhost:44359/api';
  constructor(private httpClient:HttpClient) { }

  getCompanies():Observable<ListResponseModel<Company>>{
    let newPath=this.apiUrl+"/company/getall";
    return this.httpClient.get<ListResponseModel<Company>>(newPath);
  }

  update(company:Company):Observable<ResponseModel>{    
    return this.httpClient.post<ResponseModel>(this.apiUrl+"/company/update",company);
  }

  delete(company:Company):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"/company/delete",company);
  }

  getCompanyById(companyId:number):Observable<ListResponseModel<Company>>{
    let newPath=this.apiUrl+'/company/getcompanybyid?id='+companyId;
    return this.httpClient.get<ListResponseModel<Company>>(newPath);
  }

}
