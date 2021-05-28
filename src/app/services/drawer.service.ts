import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Drawer } from '../models/drawer';
import { DrawerDetail } from '../models/drawerDetail';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class DrawerService {

  apiUrl = 'https://localhost:44359/api';
  constructor(private httpClient:HttpClient) { }

  getDrawers():Observable<ListResponseModel<DrawerDetail>>{
    let newPath=this.apiUrl+"/drawer/getdetail";
    return this.httpClient.get<ListResponseModel<DrawerDetail>>(newPath);
  }

  getDrawerById(drawerId:number):Observable<ListResponseModel<DrawerDetail>>{
    let newPath=this.apiUrl+"/drawer/getbyid?id="+drawerId;
    return this.httpClient.get<ListResponseModel<DrawerDetail>>(newPath);
  }

  update(drawer:Drawer):Observable<ResponseModel>{
    let newPath=this.apiUrl+"/drawer/update";
    return this.httpClient.post<ResponseModel>(newPath,drawer);
  }

  delete(drawer:Drawer):Observable<ResponseModel>{
    let newPath=this.apiUrl+"/drawer/delete";
    return this.httpClient.post<ResponseModel>(newPath,drawer);
  }

  add(drawer:Drawer):Observable<ResponseModel>{
    let newPath=this.apiUrl+"/drawer/add";
    return this.httpClient.post<ResponseModel>(newPath,drawer);
  }
}
