import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';
import { LoginModel } from '../models/loginModel';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { RegisterModel } from '../models/registerModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = 'https://localhost:44359/api/auth';
  
  constructor(private httpClient: HttpClient) { }

  login(loginModel:LoginModel){
    let newPath=this.apiUrl+"/login";
    this.getByEmail(loginModel.email).subscribe(response=>{
      let user=response.data
      localStorage.setItem('user',JSON.stringify(user))
    })
    return this.httpClient.post<SingleResponseModel<TokenModel>>(newPath,loginModel);
  }

  register(registerModel:RegisterModel){
    let newPath=this.apiUrl+"/register";
    return this.httpClient.post<ResponseModel>(newPath,registerModel);
  }

  getByEmail(email:string):Observable<ListResponseModel<User>>{    
    let newPath=this.apiUrl+"/getbyemail?email="+email;
    return this.httpClient.get<ListResponseModel<User>>(newPath);
  }

  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true;      
    }
    else{
      return false;
    }
  }
}
