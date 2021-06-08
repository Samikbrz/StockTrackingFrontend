import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Shelf } from 'src/app/models/shelf';
import { DrawerService } from 'src/app/services/drawer.service';
import { ShelfService } from 'src/app/services/shelf.service';

@Component({
  selector: 'app-drawer-add',
  templateUrl: './drawer-add.component.html',
  styleUrls: ['./drawer-add.component.css']
})
export class DrawerAddComponent implements OnInit {

  drawerAddForm:FormGroup;
  shelves:Shelf[];

  constructor(
    private formBuilder:FormBuilder,
    private drawerService:DrawerService,
    private shelfService:ShelfService,
    private toastrService:ToastrService
  ) { }

  ngOnInit(): void {
    this.createDrawerAddForm();
    this.getShelves();
  }

  getShelves(){
    this.shelfService.getShelves().subscribe(response=>{
      this.shelves=response.data
    })
  }

  createDrawerAddForm() {
    this.drawerAddForm = this.formBuilder.group({     
      drawerName:['',Validators.required],
      shelfId:['',Validators.required],                 
    });
  }

  addDrawer(){
    if (this.drawerAddForm.valid) {
      let drawerModel = Object.assign({}, this.drawerAddForm.value);
      this.drawerService.add(drawerModel).subscribe((response)=>{
        this.toastrService.success("Çekmece başarı ile eklendi","Başarılı");   
        window.location.reload();     
      },responseError=>{                
        if(responseError.error.Message.length>0){
          this.toastrService.error(responseError.error.Message,"Hata");
        }       
      });       
    }
  }

}
