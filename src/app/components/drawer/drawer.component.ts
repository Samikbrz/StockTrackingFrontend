import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Drawer } from 'src/app/models/drawer';
import { DrawerDetail } from 'src/app/models/drawerDetail';
import { DrawerService } from 'src/app/services/drawer.service';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css']
})
export class DrawerComponent implements OnInit {

  drawers:DrawerDetail[]=[];

  constructor(
    private drawerService:DrawerService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getDrawers();
  }

  getDrawers(){
    this.drawerService.getDrawers().subscribe(response=>{
      this.drawers=response.data
      this.toastrService.success(response.message,"Başarılı");
    })
  }  

  deleteDrawer(drawer:Drawer){
    if(window.confirm("Çekmeceyi silmek istediğinizden emin misiniz?")){
      this.drawerService.delete(drawer).subscribe(response=>{
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
