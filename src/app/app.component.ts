import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stocktracking';
  product: any = { productUnitId: 1, productUnitName: "Bardak" }
  product2: any = { productUnitId: 2, productUnitName: "Bardak2" }

  products = [this.product, this.product2];
}
