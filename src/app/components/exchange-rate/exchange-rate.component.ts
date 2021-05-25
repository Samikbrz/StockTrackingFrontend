import { Component, OnInit } from '@angular/core';
import { ExchangeRate } from 'src/app/models/exchangeRate';
import { ExchangeRateService } from 'src/app/services/exchange-rate.service';

@Component({
  selector: 'app-exchange-rate',
  templateUrl: './exchange-rate.component.html',
  styleUrls: ['./exchange-rate.component.css'],
})
export class ExchangeRateComponent implements OnInit {
  exchangeRates: ExchangeRate[] = [];
  constructor(private exchageRateService: ExchangeRateService) {}

  ngOnInit(): void {
    this.getExchageRates();
  }

  getExchageRates() {
    this.exchageRateService.getExchangeRates().subscribe(response => {
      this.exchangeRates = response.data;
    })
  }
}
