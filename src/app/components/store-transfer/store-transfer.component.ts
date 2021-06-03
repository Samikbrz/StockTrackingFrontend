import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { StoreTransferDetail } from 'src/app/models/storeTransferDetail';
import { StoreTransferService } from 'src/app/services/store-transfer.service';

@Component({
  selector: 'app-store-transfer',
  templateUrl: './store-transfer.component.html',
  styleUrls: ['./store-transfer.component.css']
})
export class StoreTransferComponent implements OnInit {

  storeTransfers:StoreTransferDetail[];

  constructor(private storeTransferService:StoreTransferService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getStoreTransfers();
  }

  getStoreTransfers() {
    this.storeTransferService.getStoreTransfers().subscribe(response=>{
      this.storeTransfers=response.data;
      this.toastrService.success(response.message,"Başarılı");
    })
  }

}
