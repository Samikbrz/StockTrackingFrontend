import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = 'https://localhost:44359/api';
  constructor(private httpClient:HttpClient) { }

  getUsers():Observable<ListResponseModel<User>>{
    let newPath=this.apiUrl+"/user/getall";
    return this.httpClient.get<ListResponseModel<User>>(newPath);
  }

  getUserById(userId:number):Observable<ListResponseModel<User>>{
    let newPath=this.apiUrl+'/user/getuserbyid?id='+userId;
    return this.httpClient.get<ListResponseModel<User>>(newPath);
  }

  getUserByEmail(email:string):Observable<ListResponseModel<User>>{
    let newPath=this.apiUrl+'/user/getbyemail?email='+email;
    return this.httpClient.get<ListResponseModel<User>>(newPath);
  }

  add(user:User):Observable<ResponseModel>{
    let newPath=this.apiUrl+"/user/add";
    return this.httpClient.post<ResponseModel>(newPath,user);
  }

  update(user:User):Observable<ResponseModel>{
    let newPath=this.apiUrl+"/user/update";
    return this.httpClient.post<ResponseModel>(newPath,user);
  }

  delete(user:User):Observable<ResponseModel>{
    let newPath=this.apiUrl+"/user/delete";
    return this.httpClient.post<ResponseModel>(newPath,user)
  }
}
