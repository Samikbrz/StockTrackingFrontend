import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExchangeRate } from '../models/exchangeRate';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRateService {

  apiUrl = 'https://localhost:44359/api';
  constructor(private httpClient: HttpClient) { }

  getExchangeRates() : Observable<ListResponseModel<ExchangeRate>>{
    let newPath=this.apiUrl+'/exchangerate/getall';
    return this.httpClient.get<ListResponseModel<ExchangeRate>>(newPath);     
  }
}
