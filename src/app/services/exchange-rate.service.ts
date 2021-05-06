import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ExchangeRate } from '../models/exchangeRate';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRateService {

  apiUrl = 'https://localhost:44359/api/exchangerate/getall';
  constructor(private httpClient: HttpClient) { }

  getExchangeRates() : Observable<ListResponseModel<ExchangeRate>>{
    return this.httpClient.get<ListResponseModel<ExchangeRate>>(this.apiUrl);     
  }
}
