import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Drawer } from 'src/app/models/drawer';
import { Shelf } from 'src/app/models/shelf';
import { DrawerService } from 'src/app/services/drawer.service';
import { ShelfService } from 'src/app/services/shelf.service';

@Component({
  selector: 'app-drawer-edit',
  templateUrl: './drawer-edit.component.html',
  styleUrls: ['./drawer-edit.component.css']
})
export class DrawerEditComponent implements OnInit {

  drawerEditForm:FormGroup;
  drawer:Drawer;
  shelves:Shelf[];

  constructor(
    private formBuilder:FormBuilder,
    private shelfService:ShelfService,
    private drawerService:DrawerService,
    private toastrService:ToastrService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.activatedRoute.params.subscribe((params) => {
      if (params['drawerId']) {
        this.getDrawerById(params['drawerId']);
      }
    });
  }

  ngOnInit(): void {
    this.createDrawerEditForm();
    this.getShelves();
  } 

  createDrawerEditForm() {
    this.drawerEditForm = this.formBuilder.group({     
      drawerName:['',Validators.required],
      shelfId:['',Validators.required],                 
    });
  }

  getShelves(){
    this.shelfService.getShelves().subscribe(response=>{
      this.shelves=response.data      
    })
  }

  updateDrawer(){
    if (this.drawerEditForm.valid) {
      let drawerModel = Object.assign({}, this.drawerEditForm.value);
      drawerModel.id=this.drawer.id;
      this.drawerService.update(drawerModel).subscribe((response)=>{
        this.toastrService.success("Raf başarı ile güncellendi","Başarılı");   
        window.location.reload();     
      },(responseError)=>{        
        this.toastrService.error(responseError.error.message)
      });      
    }
  }

  getDrawerById(drawerId:number){
    this.drawerService.getDrawerById(drawerId).subscribe((response)=>{
      this.drawer=response.data[0];
      this.drawerEditForm.setValue({
        drawerName:this.drawer.drawerName,
        shelfId:this.drawer.shelfId,        
      })
    });
  }

}
