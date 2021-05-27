import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl = 'https://localhost:44359/api';
  constructor(private httpClient: HttpClient) { }

  getBrands():Observable<ListResponseModel<Brand>>{
    let newPath=this.apiUrl+"/brand/getall";
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);
  }

  getBrandById(brandId:number):Observable<ListResponseModel<Brand>>{
    let newPath=this.apiUrl+"/brand/getbrandbyid?id="+brandId;
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);
  }

  update(brand:Brand):Observable<ResponseModel>{
    let newPath=this.apiUrl+"/brand/update";
    return this.httpClient.post<ResponseModel>(newPath,brand);
  }

  delete(brand:Brand):Observable<ResponseModel>{
    let newPath=this.apiUrl+"/brand/delete";
    return this.httpClient.post<ResponseModel>(newPath,brand);
  }

  add(brand:Brand):Observable<ResponseModel>{
    let newPath=this.apiUrl+"/brand/add";
    return this.httpClient.post<ResponseModel>(newPath,brand);
  }

}
