import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Model } from '../models/model';
import { ModelDetail } from '../models/modelDetail';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  apiUrl = 'https://localhost:44359/api';
  constructor(private httpClient:HttpClient) { }

  getModels():Observable<ListResponseModel<ModelDetail>>{
    let newPath=this.apiUrl+"/model/getalldetail";
    return this.httpClient.get<ListResponseModel<ModelDetail>>(newPath);
  }

  getModelById(modelId:number):Observable<ListResponseModel<ModelDetail>>{
    let newPath=this.apiUrl+"/model/getmodelbyid?id="+modelId;
    return this.httpClient.get<ListResponseModel<ModelDetail>>(newPath);
  }

  update(model:Model):Observable<ResponseModel>{
    let newPath=this.apiUrl+"/model/update";
    return this.httpClient.post<ResponseModel>(newPath,model);
  }

  delete(model:Model):Observable<ResponseModel>{
    let newPath=this.apiUrl+"/model/delete";
    return this.httpClient.post<ResponseModel>(newPath,model);
  }

  add(model:Model):Observable<ResponseModel>{
    let newPath=this.apiUrl+"/model/add";
    return this.httpClient.post<ResponseModel>(newPath,model);
  }

}
