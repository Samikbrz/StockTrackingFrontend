import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Model } from 'src/app/models/model';
import { ModelDetail } from 'src/app/models/modelDetail';
import { ModelService } from 'src/app/services/model.service';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

  models:ModelDetail[]=[];

  constructor(private modelService:ModelService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getModels();
  }

  getModels(){
    this.modelService.getModels().subscribe(response=>{
      this.models=response.data
    })
  }  

  deleteModel(model:Model){
    if(window.confirm("Are you sure?")){
      this.modelService.delete(model).subscribe(response=>{
        this.toastrService.success("Silindi.")
        window.location.reload();
      })
    }    
  }
}
