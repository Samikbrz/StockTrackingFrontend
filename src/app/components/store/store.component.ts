import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Store } from 'src/app/models/store';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  stores:Store[]=[];

  constructor(
    private storeService:StoreService,
    private toastrService:ToastrService
    ) { }

  ngOnInit(): void {
    this.getStores();
  }

  getStores(){
    this.storeService.getStores().subscribe(response=>{
      this.stores=response.data
    })
  }

  deleteStore(store:Store){    
    if(window.confirm("Depoyu silmek istediğinizden emin misiniz?")){
      this.storeService.delete(store).subscribe(response=>{
        this.toastrService.success("Silindi","Başarılı")
        window.location.reload();
      })
    } 
  }

}
