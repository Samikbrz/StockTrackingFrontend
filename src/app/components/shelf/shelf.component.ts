import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Shelf } from 'src/app/models/shelf';
import { ShelfDetail } from 'src/app/models/shelfDetail';
import { ShelfService } from 'src/app/services/shelf.service';

@Component({
  selector: 'app-shelf',
  templateUrl: './shelf.component.html',
  styleUrls: ['./shelf.component.css']
})
export class ShelfComponent implements OnInit {

  shelves:ShelfDetail[]=[];

  constructor(private shelfService:ShelfService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getShelves();
  }

  getShelves(){
    this.shelfService.getShelves().subscribe(response=>{
      this.shelves=response.data;
      this.toastrService.success(response.message,"Başarılı");      
    })
  }  

  deleteShelf(shelf:Shelf){
    if(window.confirm("Rafı silmek istediğinizden emin misiniz?")){
      this.shelfService.delete(shelf).subscribe(response=>{
        this.toastrService.success("Silindi.")
        window.location.reload();
      },responseError=>{                       
        if(responseError.error.length>0){
          this.toastrService.error(responseError.error,"Hata");
        }       
      });
    }    
  }

}
