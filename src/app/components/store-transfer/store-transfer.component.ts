import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { StoreTransfer } from 'src/app/models/storeTransfer';
import { StoreTransferDetail } from 'src/app/models/storeTransferDetail';
import { StoreTransferService } from 'src/app/services/store-transfer.service';

@Component({
  selector: 'app-store-transfer',
  templateUrl: './store-transfer.component.html',
  styleUrls: ['./store-transfer.component.css'],
})
export class StoreTransferComponent implements OnInit {
  storeTransfers: StoreTransferDetail[];

  constructor(
    private storeTransferService: StoreTransferService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.getStoreTransfers();
  }

  getStoreTransfers() {
    this.storeTransferService.getStoreTransfers().subscribe((response) => {
      this.storeTransfers = response.data;
      this.toastrService.success(response.message, 'Başarılı');
    });
  }

  deleteStoreTransfer(storeTransfer: StoreTransfer) {
    if (window.confirm('Ürün transferini silmek istediğinizden emin misiniz?')) {
      this.storeTransferService.delete(storeTransfer).subscribe((response) => {
        window.location.reload();
        this.toastrService.success('Silindi', 'Başarılı');
      });
    }
  }
}
